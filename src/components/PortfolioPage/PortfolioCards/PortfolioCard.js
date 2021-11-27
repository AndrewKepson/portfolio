import React from 'react'
import { Link } from 'gatsby'

import DevSVG from './DevSvg'
import WritingSVG from './WritingSvg'
import ArtSVG from './ArtSvg'

import Classes from '../../../styles/classes'
const { portfolioCard } = Classes.components

export default function PortfolioCard({ portfolio, description, href }) {
  function chooseSvg(portfolio) {
    if (portfolio === 'Development') return <DevSVG />
    if (portfolio === 'Blog') return <WritingSVG />
    if (portfolio === 'Photography & Digital Art') return <ArtSVG />
  }

  return (
    <div className={portfolioCard.cardWrapper}>
      <div className={portfolioCard.card}>
        {chooseSvg(portfolio)}
        <h5 className={portfolioCard.header}>{portfolio}</h5>
        <p className={portfolioCard.content}>{description}</p>
        <Link to={href} className={portfolioCard.anchorText}>
          Learn More
        </Link>
      </div>
    </div>
  )
}
