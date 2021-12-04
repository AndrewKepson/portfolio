import React from 'react'

import Twitter from './Twitter'
import LinkedIn from './Linkedin'
import Github from './Github'

export default function IconLinks() {
  return (
    <div className="flex-wrap inline-flex self-center space-x-4">
      <Twitter />
      <LinkedIn />
      <Github />
    </div>
  )
}
