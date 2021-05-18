import React from 'react'

export default function DevelopmentCardFooter({ classes, project }) {
  return (
    <footer className={classes.footer}>
      <button className={classes.deployedProjectButton}>
        <a
          href={project.deployment ? project.deployment : null}
          target="_blank"
        >
          View Deployed Project
        </a>
      </button>
      <button className={classes.githubProjectButton}>
        <a href={project.github ? project.github : null} target="_blank">
          View Code on GitHub
        </a>
      </button>
    </footer>
  )
}
