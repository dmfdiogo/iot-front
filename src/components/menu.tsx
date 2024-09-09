'use client'
import React from 'react'
import Button from './layout/button'

import { useRouter, usePathname } from 'next/navigation'

interface ILink {
  label: string
  page: string
}

const Menu = () => {
  const router = useRouter()
  const pathname = usePathname()

  const getCurrentPageTextColor = (page: string) => {
    if (pathname === `/${page}`) {
      return 'text-primary'
    }
  }

  const links: ILink[] = [
    {
      label: 'Dashboard',
      page: 'dashboard',
    },
    {
      label: 'Measurements',
      page: 'measurements',
    },
    {
      label: 'CSV Upload',
      page: 'upload_csv',
    },
  ]

  return (
    <div className="flex h-full min-w-[200px] flex-col gap-4 border-r-2 border-zinc-700 bg-zinc-900 p-4">
      <p className="text-offwhite2 border-offwhite mb-4 font-extrabold">Menu</p>
      {links.map((link: ILink) => {
        return (
          <Button
            key={link.page}
            className={`flex hover:text-primaryLit ${getCurrentPageTextColor(link.page)}`}
            onClick={() => {
              router.push(`/${link.page}`)
            }}
          >
            {link.label}
          </Button>
        )
      })}
    </div>
  )
}

export default Menu
