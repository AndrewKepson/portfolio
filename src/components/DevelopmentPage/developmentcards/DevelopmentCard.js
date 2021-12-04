import React from 'react'
import Fade from 'react-reveal/Fade'

import DevelopmentCardContent from './DevelopmentCardContent'
import DevelopmentCardImage from './DevelopmentCardImage'

export default function DevelopmentCard({ classes, imgSrc, project }) {
  return (
    <Fade bottom>
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
    </Fade>
  )
}
