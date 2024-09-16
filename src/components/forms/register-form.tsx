'use client'
import React, { useState } from 'react'
import Input from '../layout/input'
import Button from '../layout/button'
import { useRouter } from 'next/navigation'
import { RegisterRequest } from '@/types/requests'
import useAuthAPI from '@/app/api/auth-api'

const RegisterForm = () => {
  const router = useRouter()
  const { userRegister } = useAuthAPI()

  const [registerData, setRegisterData] = useState<RegisterRequest>({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    role: '',
    phone_number: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await userRegister(registerData)
    if (res.success) {
      router.push('/')
    }
  }

  // it was made like this just for demonstrating purposes
  const handleChange = ({ id, value }: { id: string; value: string }) => {
    setRegisterData((prev) => ({ ...prev, [id]: value }))
  }

  const handleLogin = () => {
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="mb-4 text-primary">IoT Frontend</p>
      <Input
        label={'Username'}
        value={registerData.username}
        onChange={(value) => handleChange({ id: 'username', value })}
      />
      <Input
        label={'Email'}
        value={registerData.email}
        onChange={(value) => handleChange({ id: 'email', value })}
      />
      <Input
        label={'Phone number'}
        value={registerData.phone_number}
        onChange={(value) => handleChange({ id: 'phone_number', value })}
      />
      <Input
        label={'Password'}
        value={registerData.password}
        onChange={(value) => handleChange({ id: 'password', value })}
      />
      <Button onClick={handleSubmit}>Register</Button>
    </form>
  )
}

export default RegisterForm
