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

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`

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

const baseFetch = async ({
  endpoint,
  data,
  method,
}: FetchType & { method: MethodType }) => {
  const response = await fetch(`${baseUrl}${endpoint}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Credentials': 'true',
    },
    credentials: 'include',
  })
  return response
}

const Api = {
  get,
  post,
  put,
  patch,
}

export default Api
