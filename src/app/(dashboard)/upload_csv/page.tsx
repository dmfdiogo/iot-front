'use client'
import CsvUploadForm from '@/components/forms/csv-upload-form'
import React from 'react'

const CSVUploadPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="">CSV Upload</div>
      <div className="text-offwhite2">
        Please choose a .csv file from your computer
      </div>
      <div className="text-offwhite2">Example File:</div>
      <table className="mb-4 border-collapse border border-slate-400 text-offwhite2">
        <caption>example-equipment-data.csv</caption>
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Equipment ID</th>
            <th className="border border-slate-300 p-2">Timestamp</th>
            <th className="border border-slate-300 p-2">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-2">EQ-12495</td>
            <td className="border border-slate-300 p-2">
              2023-02-12T01:30:00.000-05:00
            </td>
            <td className="border border-slate-300 p-2">78.8</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-2">EQ-12492</td>
            <td className="border border-slate-300 p-2">
              2023-01-12T01:30:00.000-05:00
            </td>
            <td className="border border-slate-300 p-2">8.8</td>
          </tr>
        </tbody>
      </table>
      <CsvUploadForm
        onUpload={(csvData) => {
          alert('File uploaded')
          console.log(csvData)
        }}
      />
    </div>
  )
}

export default CSVUploadPage
