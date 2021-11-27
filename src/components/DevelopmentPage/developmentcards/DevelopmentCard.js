import React from 'react'

import DevelopmentCardContent from './DevelopmentCardContent'
import DevelopmentCardImage from './DevelopmentCardImage'

export default function DevelopmentCard({ classes, imgSrc, project }) {
  return (
    <div className={classes.card}>
      <div className={classes.cardLayout}>
        <DevelopmentCardImage
          classes={classes}
          imgSrc={imgSrc}
          altText={project.altText}
        />
        <DevelopmentCardContent classes={classes} project={project} />
      </div>
    </div>
  )
}
