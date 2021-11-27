import React from 'react'

import Tagline from './Tagline'
import IconLinks from './Iconlinks'

export default function FooterContent() {
  return (
    <div className="-mx-4 flex flex-col-reverse">
      <Tagline />
      <IconLinks />
    </div>
  )
}
