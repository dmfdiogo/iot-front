export interface RegisterRequest {
  username: string
  email: string
  first_name: string
  last_name: string
  password: string
  role: string
  phone_number: string
}

export interface TokenRequest {
  username: string
  password: string
}
