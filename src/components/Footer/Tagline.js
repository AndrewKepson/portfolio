import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Copyright from './Copyright'

export default function Tagline() {
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
      <Copyright author={data.site.siteMetadata.author} />
    </div>
  )
}
