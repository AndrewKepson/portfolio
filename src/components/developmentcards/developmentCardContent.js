import React from 'react'

import DevelopmentCardFooter from './developmentCardFooter'

export default function DevelopmentCardContent({ classes, project }) {
  return (
    <div className={classes.cardContentWrapper}>
      <div className={classes.cardContent}>
        <h3 className="text-3xl pb-3">{project.project}</h3>
        <p className={classes.description}>{project.description}</p>
        <DevelopmentCardFooter classes={classes} project={project} />
      </div>
    </div>
  )
}
