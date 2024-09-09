export enum TimeRange {
  TwentyFourHours = '24 hours',
  FortyEightHours = '48 hours',
  OneWeek = '1 week',
  OneMonth = '1 month',
}

interface IFormatTimestamp {
  timestamp: string
  range: TimeRange
}

const useFormatters = () => {
  const getRange = (range: TimeRange): Intl.DateTimeFormatOptions => {
    switch (range) {
      case TimeRange.TwentyFourHours:
        return {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }
      case TimeRange.FortyEightHours:
        return {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }
      case TimeRange.OneWeek:
        return {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }
      case TimeRange.OneMonth:
        return {
          day: '2-digit',
          month: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        }
    }
  }

  const formatTimestamp = ({ timestamp, range }: IFormatTimestamp) => {
    const formattedTimestamp = new Date(timestamp)
      .toLocaleString('en-GB', {
        timeZone: 'Europe/Moscow',
        ...getRange(range),
      })
      .replace(',', '')

    return formattedTimestamp
  }

  return {
    formatTimestamp,
  }
}

export default useFormatters
