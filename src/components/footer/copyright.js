import React from 'react'

export default function Copyright({ author }) {
  return (
    <div className="-mx-4 flex flex-wrap items-center justify-center">
      <p>&copy; 2021 by {author}</p>
    </div>
  )
}
