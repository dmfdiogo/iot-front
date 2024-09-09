'use client'
import React, { useState } from 'react'

interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password' | 'email' | 'number' | 'file' // Add more types if needed
  placeholder?: string
  className?: string
}

const Input = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  className,
  ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    onChange(value)
  }

  return (
    <div className={className || 'flex flex-col gap-[1px]'}>
      <label
        className="font-light text-offwhite"
        htmlFor={label}
      >{`${label}:`}</label>
      <input
        className="rounded-md bg-zinc-800 p-2 text-offwhite2"
        type={type}
        id={label}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

export default Input
