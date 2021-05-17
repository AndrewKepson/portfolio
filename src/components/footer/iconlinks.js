import React from 'react'

import Twitter from './twitter'
import LinkedIn from './linkedin'
import Github from './github'

export default function IconLinks() {
  return (
    <div className="flex-wrap inline-flex self-center space-x-4">
      <Twitter />
      <LinkedIn />
      <Github />
    </div>
  )
}
