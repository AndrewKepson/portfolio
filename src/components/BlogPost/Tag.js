import React from 'react'
import { Link } from 'gatsby'

export const Tag = ({ tag, color }) => (
  <div
    className={`rounded-sm text-gray-900 ${color} text-md m-1 flex h-full w-full items-center justify-center font-work-sans font-semibold shadow-sm`}
  >
    <Link to={tag.uri}>{tag.name}</Link>
  </div>
)
