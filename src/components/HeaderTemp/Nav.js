import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Popover } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'

import Brand from './Brand'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Blog', to: '/blog' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

export default function Nav() {
  return (
    <nav
      className="relative flex items-center justify-between sm:h-10 lg:justify-start"
      aria-label="Global"
    >
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Brand />
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-purple-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        {navigation.map(item => (
          <Link
            key={item.name}
            to={item.to}
            className="font-medium text-gray-500 hover:text-gray-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}