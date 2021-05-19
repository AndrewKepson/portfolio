import React from 'react'

export default function DevelopmentCardFooter({ classes, project }) {
  return (
    <footer className={classes.footer}>
      <div className={classes.deployedProjectButton}>
        <a href={project.deployment} target="_blank">
          View Deployed Project
        </a>
      </div>
      <div className={classes.githubProjectButton}>
        <a href={project.github} target="_blank">
          View Code on GitHub
        </a>
      </div>
    </footer>
  )
}
