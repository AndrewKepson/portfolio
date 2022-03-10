import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

export const Tagline = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className="py-4 text-sm">
      <hr className="mx-8 mb-4 border-gray-400" />
      <div className="-mx-4 flex flex-col flex-wrap items-center justify-center">
        <p>
          &copy; {new Date().getFullYear()} by {data.site.siteMetadata.author}
        </p>
        <Link className="hover:text-purple-400" to="/sitemap/sitemap-0.xml">
          XML Sitemap
        </Link>
        <Link className="hover:text-purple-400" to="/html-sitemap">
          HTML Sitemap
        </Link>
      </div>
    </div>
  )
}
