import React from 'react'

import Tagline from './tagline'
import IconLinks from './iconlinks'

export default function FooterContent() {
  return (
    <div className="-mx-4 flex flex-col-reverse">
      <Tagline />
      <IconLinks />
    </div>
  )
}
