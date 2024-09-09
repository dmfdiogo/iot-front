'use client'
import { TimeRange } from '@/utils/formatters'
import { useState } from 'react'

interface TimeRangeFilterProps {
  onTimeRangeChange: (selectedRange: TimeRange) => void
}

const TimeRangeFilter: React.FC<TimeRangeFilterProps> = ({
  onTimeRangeChange,
}) => {
  const [selectedRange, setSelectedRange] = useState<TimeRange>(
    TimeRange.TwentyFourHours
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRange = event.target.value as TimeRange
    setSelectedRange(newRange)
    onTimeRangeChange(newRange)
  }

  return (
    <div className="flex flex-row items-center justify-start gap-2">
      <label htmlFor="timeRange">Equipment data for:</label>
      <select
        className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2"
        id="timeRange"
        value={selectedRange}
        onChange={handleChange}
      >
        {Object.values(TimeRange).map((range) => (
          <option className="bg-zinc-800" key={range} value={range}>
            {`Past ${range}`}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TimeRangeFilter
