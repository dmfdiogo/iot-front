'use client'
import React, { useState } from 'react'
import Input from '../layout/input'
import Button from '../layout/button'
import { useRouter, usePathname } from 'next/navigation'

interface ICredential {
  username: string
  password: string
}

const LoginForm = () => {
  const router = useRouter()

  const [credential, setCredential] = useState<ICredential>({
    username: '',
    password: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Credential:', credential)
  }

  const handleChange = ({ id, value }: { id: string; value: string }) => {
    setCredential((prev) => ({ ...prev, [id]: value }))
  }

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="mb-4 text-primary">IoT Frontend</p>
      <Input
        label={'Username'}
        value={credential.username}
        onChange={(value) => handleChange({ id: 'username', value })}
      />
      <Input
        label={'Password'}
        value={credential.password}
        type="password"
        onChange={(value) => handleChange({ id: 'password', value })}
      />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  )
}

export default LoginForm
