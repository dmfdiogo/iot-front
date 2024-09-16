'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import Chart from 'chart.js/auto'
import useFormatters, { TimeRange } from '@/utils/formatters'
import ChartFilters from './ChartFilters'
import mockData from '@/utils/mock-data'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface Payload {
  time: string
  value: number
}

interface LineChartProps {
  currentFilter: any
  equipmentName: string
  payloadData: Payload[]
}

const LineChart = ({
  currentFilter,
  equipmentName,
  payloadData,
}: LineChartProps) => {
  const { formatTimestamp } = useFormatters()

  const chartData = {
    labels: payloadData.map((item) =>
      formatTimestamp({
        timestamp: item.time,
        range: currentFilter,
      })
    ),
    datasets: [
      {
        label: equipmentName || 'Equipment Data',
        data: payloadData.map((item) => item.value),
        fill: false,
        borderColor: '#fb923c',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className="flex flex-1 flex-col">
      <p className="flex justify-center text-offwhite2">Average: XX.XX</p>
      <Line className="container w-full" data={chartData} />
    </div>
  )
}

export default LineChart
