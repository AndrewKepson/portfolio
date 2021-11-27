import React from 'react'

import ThankYou from './ThankYou'
import RenderCards from './RenderCards'

export default function CardsContent() {
  return (
    <div className="container mx-auto">
      <ThankYou />
      <RenderCards />
    </div>
  )
}
