import Papa from 'papaparse'

export interface CsvRow {
  equipmentId: string
  timestamp: string // You might want to convert this to a Date object later
  value: number
}

const parseCsv = (csvData: string): Promise<CsvRow[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvData, {
      header: true, // Assumes the first row contains headers
      dynamicTyping: true, // Automatically converts values to appropriate types
      skipEmptyLines: true,
      complete: (results: any) => {
        if (results.errors.length > 0) {
          reject(results.errors)
        } else {
          resolve(results.data as CsvRow[])
        }
      },
      error: (error: any) => {
        reject(error)
      },
    })
  })
}

export default parseCsv
