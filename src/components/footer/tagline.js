import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Copyright from './copyright'

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
      <hr className="border-gray-400 mb-4 mx-8" />
      <Copyright author={data.site.siteMetadata.author} />
    </div>
  )
}
