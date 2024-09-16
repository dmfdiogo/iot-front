interface FetchType {
  endpoint: string
  data?: any
}

enum MethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`

const get = async (endpoint: string): Promise<any> => {
  return await baseFetch({ endpoint, method: MethodType.GET })
}

const post = async ({ endpoint, data }: FetchType): Promise<any> => {
  return await baseFetch({ endpoint, data, method: MethodType.POST })
}

const put = async ({ endpoint, data }: FetchType): Promise<any> => {
  return await baseFetch({ endpoint, data, method: MethodType.PUT })
}

const patch = async ({ endpoint, data }: FetchType): Promise<any> => {
  return await baseFetch({ endpoint, data, method: MethodType.PATCH })
}

const token = async ({ endpoint, data }: FetchType): Promise<any> => {
  const formData = new FormData()
  formData.append('username', data.username)
  formData.append('password', data.password)
  formData.append('grant_type', 'password')

  const response = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    body: formData,
  })
  return response
}

const uploadcsv = async ({ endpoint, data }: FetchType): Promise<any> => {
  const token = localStorage.getItem('accessToken')
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': `${apiUrl}`,
    Authorization: '',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    body: data,
    headers,
  })
  return response
}

const baseFetch = async ({
  endpoint,
  data,
  method,
}: FetchType & { method: MethodType }) => {
  const token = localStorage.getItem('accessToken')

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': `${apiUrl}`,
    Authorization: '',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(`${apiUrl}${endpoint}`, {
    method,
    body: JSON.stringify(data),
    headers,
  })
  return response
}

const Api = {
  get,
  post,
  put,
  patch,
  token,
  uploadcsv,
}

export default Api
