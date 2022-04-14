import React from 'react'

export const Tag = ({ tag, color }) => (
  <div
    className={`text-coolGray-500 text-md m-1 flex h-full w-full items-center justify-center font-work-sans font-semibold`}
  >
    {tag}
  </div>
)
