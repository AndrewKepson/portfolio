import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `)

  return data
}
