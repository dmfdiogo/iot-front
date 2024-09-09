import Api from '@/utils/api'

interface IUserCredentials {
  email: string
  password: string
}

interface IUserRegister {
  username: string
  email: string
  first_name: string
  last_name: string
  password: string
  role: string
  phone_number: string
}

const useUserApi = () => {
  const registerUser = async (formData: any) => {
    try {
      const response = await Api.post({
        endpoint: '/user/',
        data: formData,
      })
      return await response.json()
    } catch (error) {
      console.log('User post error: ', error)
    }
  }

  const userLogin = async (credentials: IUserCredentials): Promise<any> => {
    try {
      const response = await Api.post({
        endpoint: '/user/token',
        data: credentials,
      })
      return await response.json()
    } catch (error) {
      console.log('User get error', error)
    }
  }

  const userLogout = async () => {
    try {
      const response = await Api.get('/user/logout')
      return await response.json()
    } catch (error) {
      console.log('User logout error', error)
    }
  }

  const resetPassword = async ({
    password,
    token,
  }: {
    password: string
    token: string
  }): Promise<any> => {
    try {
      const response = await Api.put({
        endpoint: `/user/password/${token}`,
        data: { password: password },
      })
      return await response.json()
    } catch (error) {
      console.log('User password reset error', error)
    }
  }

  const updateUser = async (formData: any) => {
    try {
      // const response = await Api.post('url', formData)
    } catch (error) {
      console.log('User post error: ', error)
    }
  }

  const getUser = async () => {
    try {
      // const response = await Api.get('url')
    } catch (error) {
      console.log('User get error', error)
    }
  }

  const userApi = {
    registerUser,
    updateUser,
    getUser,
    userLogin,
    resetPassword,
  }

  return userApi
}

export default useUserApi
