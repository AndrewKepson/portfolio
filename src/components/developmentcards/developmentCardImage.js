import React from 'react'
import Img from 'gatsby-image'

export default function DevelopmentCardImage({ classes, imgSrc }) {
  return (
    <div className={classes.cardImageWrapper}>
      <Img
        className={classes.cardImage}
        fluid={imgSrc.node.childImageSharp.fluid}
        loading="lazy"
        alt="Alt"
      />
    </div>
  )
}
