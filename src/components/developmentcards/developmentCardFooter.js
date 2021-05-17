import React from 'react'

export default function DevelopmentCardFooter({ classes }) {
  return (
    <footer className={classes.footer}>
      <button className={classes.deployedProjectButton}>
        View Deployed Project
      </button>
      <button className={classes.githubProjectButton}>
        View Code on GitHub
      </button>
    </footer>
  )
}
