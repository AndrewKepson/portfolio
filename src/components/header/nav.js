import React from 'react'
import { Link } from 'gatsby'

export default function Nav({ burger, setBurger }) {
  return (
    <nav className="flex flex-wrap text-lg">
      <div
        className={
          burger === false
            ? 'lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto w-full hidden'
            : 'bg-gray-600 opacity-90 h-screen  mx-auto lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto pl-5 w-full z-10'
        }
        data-name="nav-menu"
      >
        <div className="flex flex-col items-start lg:flex-row ml-0 p-4 text-gray-200 lg:text-gray-700">
          <Link
            to="/"
            className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            onClick={() => setBurger(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            onClick={() => setBurger(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            onClick={() => setBurger(false)}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            onClick={() => setBurger(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            onClick={() => setBurger(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
