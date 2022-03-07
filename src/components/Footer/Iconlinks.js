import React from 'react'

import Twitter from './Twitter'
import LinkedIn from './Linkedin'
import Github from './Github'

export default function IconLinks() {
  return (
    <div className="inline-flex flex-wrap space-x-4 self-center">
      <Twitter />
      <LinkedIn />
      <Github />
    </div>
  )
}
