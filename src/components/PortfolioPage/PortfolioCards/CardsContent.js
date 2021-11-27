import React from 'react'
import Flip from 'react-reveal/Flip'

import ThankYou from './ThankYou'
import RenderCards from './RenderCards'

export default function CardsContent() {
  return (
    <div className="container mx-auto">
      <ThankYou />
      <Flip top>
        <RenderCards />
      </Flip>
    </div>
  )
}
