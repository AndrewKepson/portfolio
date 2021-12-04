import React from 'react'

import { portfolioCardsData } from '../../../data/PortfolioCardsData'
import PortfolioCard from './PortfolioCard'

export default function RenderCards() {
  return (
    <div className="flex flex-wrap justify-center">
      {portfolioCardsData.map((portfolio, i) => (
        <PortfolioCard
          key={i}
          portfolio={portfolio.portfolio}
          description={portfolio.description}
          href={portfolio.href}
        />
      ))}
    </div>
  )
}