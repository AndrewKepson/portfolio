import React from 'react'

export default function Copyright({ author }) {
  return (
    <div className="-mx-4 flex flex-col flex-wrap items-center justify-center">
      <p>&copy; 2021 by {author}</p>
      <a href="https://github.com/AndrewKepson/portfolio" target="_blank">
        View the Code for This Website
      </a>
    </div>
  )
}
