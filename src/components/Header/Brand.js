import React from 'react'
import { Link } from 'gatsby'

export default function Brand() {
  return (
    <Link to="/">
      <div className="flex flex-wrap items-center py-6 justify-between">
        <div className="px-4 py-1 space-x-1">
          <p className="font-medium mr-auto text-3xl text-purple-400 uppercase">
            AK&nbsp;
          </p>
        </div>
      </div>
    </Link>
  )
}
