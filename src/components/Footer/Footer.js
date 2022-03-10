import React from 'react'

import { Tagline } from './Tagline'
import { IconLinks } from './Iconlinks'

export const Footer = () => (
  <footer className="pin-b w-full flex-col items-center justify-center bg-gray-200 p-4 pt-10  font-light text-gray-500">
    <div className="-mx-4 flex flex-col-reverse">
      <Tagline />
      <IconLinks />
    </div>
  </footer>
)
