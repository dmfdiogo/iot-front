'use client'
import parseCsv, { CsvRow } from '@/utils/parseCsv'
import React, { useState } from 'react'
import Button from '../layout/button'

interface CsvUploadFormProps {
  onUpload: (csvData: CsvRow[]) => void
}

const CsvUploadForm = ({ onUpload }: CsvUploadFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      if (file.type === 'text/csv') {
        setSelectedFile(file)
      } else {
        alert('Please select a CSV file.')
        setSelectedFile(null)
      }
    } else {
      setSelectedFile(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    const reader = new FileReader()
    reader.onload = async (e) => {
      const csvData = e.target?.result as string
      try {
        const parsedData = await parseCsv(csvData) // You'll need to implement the 'parseCsv' function
        onUpload(parsedData)
      } catch (error) {
        console.error('Error in parsing CSV: ', error)
      }
      setSelectedFile(null)
    }
    reader.readAsText(selectedFile)
  }

  return (
    <div>
      <div className={'flex flex-row gap-2'}>
        <input
          className="rounded-sm bg-zinc-800 p-2 text-offwhite2"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
        <Button onClick={handleUpload} disabled={!selectedFile}>
          Upload
        </Button>
      </div>
    </div>
  )
}

export default CsvUploadForm
