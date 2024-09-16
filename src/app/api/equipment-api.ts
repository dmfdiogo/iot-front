import { RegisterRequest, TokenRequest } from '@/types/requests'
import Api from '@/utils/api'

const useEquipmentAPI = () => {
  const getEquipments = async () => {
    try {
      const response = await Api.get('/equipment')
      return await response.json()
    } catch (error) {
      console.log('User post error: ', error)
    }
  }

  const getEquipmentSensorData = async (
    equipmentName: string,
    queryPeriod: string
  ) => {
    try {
      const response = await Api.get(
        `/equipment/sensor/get_data?equipment_name=${equipmentName}&start_time=${queryPeriod}`
      )
      return await response.json()
    } catch (error) {
      console.log('getEquipmentSensorData error: ', error)
    }
  }

  const equipmentAPI = {
    getEquipments,
    getEquipmentSensorData,
  }

  return equipmentAPI
}

export default useEquipmentAPI
