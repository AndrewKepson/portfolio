import React from 'react'
import { Link } from 'gatsby'
import { Popover } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import Brand from './brand'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'Blog', to: '/blog' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

export default function MobileNav() {
  return (
    <div className="rounded-lg shadow-md bg-gray-900 h-screen font-work-sans ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="px-5 pt-4 flex items-center justify-between">
        <Brand />
        <div className="-mr-2">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600">
            <span className="sr-only">Close main menu</span>
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map(item => (
          <Link
            key={item.name}
            to={item.to}
            className="block px-3 py-2 rounded-md text-base  font-medium text-gray-200 hover:text-gray-400 hover:bg-gray-50"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
