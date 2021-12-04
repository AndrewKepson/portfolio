import React from 'react'

export default function Burger({ handleBurger }) {
  return (
    <button
      className="hover:text-purple-700 py-2 p-4 md:p-6 rounded text-purple-400 lg:hidden"
      onClick={handleBurger}
    >
      <span className="block border-b-2 border-current my-1 w-6"></span>
      <span className="block border-b-2 border-current my-1 w-6"></span>
      <span className="block border-b-2 border-current my-1 w-6"></span>
    </button>
  )
}
