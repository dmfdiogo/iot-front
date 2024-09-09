import Menu from '@/components/menu'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-row">
      <Menu />
      <div className="flex flex-1 bg-zinc-950">{children}</div>
    </div>
  )
}

export default DashboardLayout
