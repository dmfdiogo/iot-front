'use client'
import useEquipmentAPI from '@/app/api/equipment-api'
import ChartFilters from '@/components/ChartFilters'
import Button from '@/components/layout/button'
import LineChart from '@/components/LineChart'
import useFormatters, { TimeRange } from '@/utils/formatters'
import mockData from '@/utils/mock-data'
import React, { useEffect, useState } from 'react'

interface Equipment {
  id: number
  name: string
  average: any
}

const Measurements = () => {
  const [equipmentName, setEquipmentName] = useState('')
  const [equipmentData, setEquipmentData] = useState<any[]>([])
  const [equipmentList, setEquipmentList] = useState<string[]>([])
  const [currentFilter, setCurrentFilter] = useState<TimeRange>(
    TimeRange.OneMonth
  )

  const { getEquipments, getEquipmentSensorData } = useEquipmentAPI()
  const { getQueryRange } = useFormatters()

  const fetchEquipment = async () => {
    const res = await getEquipments()
    if (res && res.length > 0) {
      const equipmentNames = res.map((equipment: Equipment) => equipment.name)
      setEquipmentList(equipmentNames)
    }
  }

  interface QueryProps {
    equipmentName: string
    timeRange: TimeRange
  }

  const handleGetSensorData = async ({
    equipmentName,
    timeRange,
  }: QueryProps) => {
    const queryPeriod = getQueryRange(timeRange)
    const res = await getEquipmentSensorData(equipmentName, queryPeriod)
    if (res?.results) {
      setEquipmentData(res.results)
    }
  }

  useEffect(() => {
    fetchEquipment()
  }, [])

  useEffect(() => {
    handleGetSensorData({
      equipmentName: equipmentName,
      timeRange: currentFilter,
    })
  }, [equipmentName, currentFilter])

  return (
    <div className="flex flex-1 flex-row p-4">
      <div className="flex h-full w-1/5 flex-col md:w-1/6 2xl:w-1/12">
        <div className="mb-2 text-white" onClick={() => fetchEquipment()}>
          Equipments:
        </div>
        <div className="flex-grow overflow-y-auto rounded-sm border border-zinc-800 p-2">
          {equipmentList.map((equipment: string) => (
            <button
              key={equipment}
              className="flex hover:text-primary"
              onClick={() => {
                setEquipmentName(equipment)
              }}
            >
              {equipment}
            </button>
          ))}
        </div>
      </div>
      <div className="ml-2 flex w-4/5 items-center md:w-5/6 2xl:w-11/12">
        <div className="flex w-full flex-col">
          <ChartFilters onTimeRangeChange={setCurrentFilter} />
          <LineChart
            currentFilter={currentFilter}
            equipmentName={equipmentName}
            payloadData={equipmentData}
          />
        </div>
      </div>
    </div>
  )
}

export default Measurements
