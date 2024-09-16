import { RegisterRequest, TokenRequest } from '@/types/requests'
import { TokenResponse } from '@/types/responses'
import Api from '@/utils/api'

const useAuthAPI = () => {
  const userRegister = async (formData: RegisterRequest) => {
    try {
      const response = await Api.post({
        endpoint: '/auth/',
        data: { formData },
      })
      return await response.json()
    } catch (error) {
      console.log('User post error: ', error)
    }
  }

  const userToken = async (credentials: TokenRequest): Promise<any> => {
    try {
      const response = await Api.token({
        endpoint: '/auth/token',
        data: credentials,
      })

      const jsonResponse: TokenResponse = await response.json()

      try {
        if (jsonResponse.success) {
          localStorage.setItem('accessToken', jsonResponse.access_token)
        }
        return jsonResponse
      } catch (error) {
        console.error('Failed to set token', error) // Log the error for debugging
      }
    } catch (error) {
      console.log('User get error', error)
    }
  }

  const userApi = {
    userRegister,
    userToken,
  }

  return userApi
}

export default useAuthAPI
