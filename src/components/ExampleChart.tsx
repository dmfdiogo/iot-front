'use client'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'

Chart.register(CategoryScale)

const ExampleChart = () => {
  const timeseries = [
    {
      value: 10,
      timestamp: '00:00',
    },
    {
      value: 90,
      timestamp: '00:01',
    },
    {
      value: 20,
      timestamp: '00:02',
    },
    {
      value: 80,
      timestamp: '00:03',
    },
    {
      value: 30,
      timestamp: '00:04',
    },
    {
      value: 70,
      timestamp: '00:05',
    },
    {
      value: 40,
      timestamp: '00:06',
    },
    {
      value: 60,
      timestamp: '00:07',
    },
    {
      value: 50,
      timestamp: '00:08',
    },
    {
      value: 50,
      timestamp: '00:09',
    },
  ]

  type Point = {
    value: number
    timestamp: string
  }

  type IPoints = Point[]

  const getValueAndLabelsArrays = (
    timeseries: IPoints
  ): { labels: string[]; values: number[] } => {
    const labels: string[] = []
    const values: number[] = []

    timeseries.forEach((point) => {
      labels.push(point.timestamp)
      values.push(point.value)
    })

    return {
      labels,
      values,
    }
  }

  const data = {
    // labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06'],
    labels: getValueAndLabelsArrays(timeseries).labels,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        borderColor: '#fb923c',
        tension: 0.1,
        // data: [1, 59, 80, 81, 56, 55, 40],
        data: getValueAndLabelsArrays(timeseries).values,
      },
    ],
  }

  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default ExampleChart
