import React from 'react'

export default function DevelopmentCardFooter({ classes, project }) {
  return (
    <footer className={classes.footer}>
      <div className={classes.deployedProjectButton}>
        <a href={project.deployment} target="_blank" rel="noreferrer">
          View Deployed Project
        </a>
      </div>
      <div className={classes.githubProjectButton}>
        <a href={project.github} target="_blank" rel="noreferrer">
          View Code on Github
        </a>
      </div>
    </footer>
  )
}
