import React from 'react'

import ThankYou from './thankYou'
import RenderCards from './renderCards'

export default function CardsContent() {
  return (
    <div className="container mx-auto">
      <ThankYou />
      <RenderCards />
    </div>
  )
}
