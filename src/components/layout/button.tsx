'use client'
import React, { MouseEventHandler } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: any
  className?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  className,
  variant = 'primary',
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const getVariant = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'rounded-sm border-zinc-950 bg-primary p-2 font-bold text-zinc-950 transition duration-150 ease-in hover:bg-primaryLit'
        break
      case 'secondary':
        return 'rounded-sm border-offwhite2 border-2 p-2 text-offwhite'
      default:
        break
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className || getVariant(variant)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
