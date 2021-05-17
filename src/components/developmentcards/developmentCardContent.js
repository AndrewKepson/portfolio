import React from 'react'

import DevelopmentCardFooter from './developmentCardFooter'

export default function DevelopmentCardContent({
  classes,
  project,
  description,
}) {
  return (
    <div className={classes.cardContentWrapper}>
      <div className={classes.cardContent}>
        <h3 className="text-3xl pb-3">{project}</h3>
        <p className={classes.description}>{description}</p>
        <DevelopmentCardFooter classes={classes} />
      </div>
    </div>
  )
}
