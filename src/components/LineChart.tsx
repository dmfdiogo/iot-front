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
  equipmentId: string
  timestamp: string
  value: number
}

interface LineChartProps {
  payloadData: Payload[]
}

const LineChart = ({ payloadData }: LineChartProps) => {
  const { formatTimestamp } = useFormatters()

  const [currentFilter, setCurrentFilter] = useState<TimeRange>(
    TimeRange.OneMonth
  )

  useEffect(() => {
    console.log(currentFilter)
  }, [currentFilter])

  const handleFilterChange = setCurrentFilter

  const chartData = {
    labels: payloadData.map((item) =>
      formatTimestamp({
        timestamp: item.timestamp,
        range: currentFilter,
      })
    ),
    datasets: [
      {
        label: payloadData[0]?.equipmentId || 'Equipment Data',
        data: payloadData.map((item) => item.value),
        fill: false,
        borderColor: '#fb923c',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className="flex flex-1 flex-col">
      <ChartFilters onTimeRangeChange={handleFilterChange} />
      <p className="text-offwhite2 flex justify-center">Average: XX.XX</p>
      <Line className="container w-full" data={chartData} />
    </div>
  )
}

export default LineChart
