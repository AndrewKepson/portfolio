import React from 'react'

import DevelopmentCardContent from './developmentCardContent'
import DevelopmentCardImage from './developmentCardImage'

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
