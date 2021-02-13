import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="bg-gray-100 h-1/5">
      <section className="container mx-auto">
        <div className="flex flex-wrap items-center py-6 justify-between">
          <div className="px-4 py-1 space-x-1">
            <p className="font-medium hover:text-purple-400 mr-auto text-3xl text-purple-400 uppercase">
              AK&nbsp;
            </p>
          </div>
        </div>
        <hr className="border-gray-400 border-opacity-50 mx-auto w-full" />
      </section>
      <nav className="flex items-center flex-wrap px-4  container mx-auto py-2 justify-between text-lg">
        <button
          className="hover:text-purple-700 px-3 py-2 rounded text-purple-400 lg:hidden"
          id="burger"
          data-name="nav-toggler"
          data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}'
        >
          <span className="block border-b-2 border-current my-1 w-6"></span>
          <span className="block border-b-2 border-current my-1 w-6"></span>
          <span className="block border-b-2 border-current my-1 w-6"></span>
        </button>
        <div
          className="lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto space-y-2 w-full hidden"
          data-name="nav-menu"
        >
          <div className="flex flex-col lg:flex-row  ml-0">
            <Link
              to="/"
              className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-light hover:text-purple-400 px-0 py-2 uppercase lg:px-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
