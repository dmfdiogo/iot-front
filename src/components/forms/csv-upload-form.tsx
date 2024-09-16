'use client'
import parseCsv, { CsvRow } from '@/utils/parseCsv'
import React, { useState } from 'react'
import Button from '../layout/button'
import useEquipmentAPI from '@/app/api/equipment-api'

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

  const handleUpload2 = async () => {
    if (!selectedFile) {
      alert('Please select a CSV file to upload.')
      return
    }
    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await fetch(
        'http://localhost:8000/equipment/upload_csv/',
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        alert(data.message)
      } else {
        const errorData = await response.json()
        console.error(
          'Error uploading CSV:',
          errorData.detail || response.statusText
        )
      }
    } catch (error) {
      console.error('Error during upload:', error)
      // Handle network or other errors
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    const reader = new FileReader()
    reader.onload = async (e) => {
      const csvData = e.target?.result as string
      try {
        const parsedData = await parseCsv(csvData)
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
        <Button onClick={handleUpload2} disabled={!selectedFile}>
          Upload
        </Button>
      </div>
    </div>
  )
}

export default CsvUploadForm
