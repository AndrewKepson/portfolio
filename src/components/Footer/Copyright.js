import React from 'react'
import { Link } from 'gatsby'

export default function Copyright({ author }) {
  return (
    <div className="-mx-4 flex flex-col flex-wrap items-center justify-center">
      <p>
        &copy; {new Date().getFullYear()} by {author}
      </p>
      <Link className="hover:text-purple-400" to="/sitemap/sitemap-0.xml">
        XML Sitemap
      </Link>
      <Link className="hover:text-purple-400" to="/html-sitemap">
        HTML Sitemap
      </Link>
    </div>
  )
}
