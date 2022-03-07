import React from 'react'

export default function Burger({ handleBurger }) {
  return (
    <button
      className="rounded p-4 py-2 text-purple-400 hover:text-purple-700 md:p-6 lg:hidden"
      onClick={handleBurger}
    >
      <span className="my-1 block w-6 border-b-2 border-current"></span>
      <span className="my-1 block w-6 border-b-2 border-current"></span>
      <span className="my-1 block w-6 border-b-2 border-current"></span>
    </button>
  )
}
