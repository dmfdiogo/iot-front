'use client'
import Button from '@/components/layout/button'
import LineChart from '@/components/LineChart'
import mockData from '@/utils/mock-data'
import React from 'react'

const Measurements = () => {
  const equipmentList: string[] = [
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
    'EQ-12495',
  ]
  return (
    <div className="flex flex-1 flex-row p-4">
      <div className="flex h-full w-1/5 flex-col md:w-1/6 2xl:w-1/12">
        <div className="mb-2 text-white">Equipments:</div>
        <div className="flex-grow overflow-y-auto rounded-sm border border-zinc-800 p-2">
          {equipmentList.map((equipment: string) => (
            <button
              className="flex hover:text-primary"
              onClick={() => alert(1)}
            >
              oie
            </button>
          ))}
        </div>
      </div>
      <div className="ml-2 flex w-4/5 items-center md:w-5/6 2xl:w-11/12">
        <LineChart payloadData={mockData} />
      </div>
    </div>
  )
}

export default Measurements
