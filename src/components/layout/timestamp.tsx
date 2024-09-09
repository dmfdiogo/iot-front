import React from 'react'

const TimestampDisplay = ({ timestamp }: { timestamp: string }) => {
  const formattedTimestamp = new Date(timestamp)
    .toLocaleString('pt-BR', {
      timeZone: 'GMT+3',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    .replace(',', '') // Remove the comma if you don't want it

  return formattedTimestamp
}

export default TimestampDisplay
