import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Seo, HomePageContent } from '../components/components'

const IndexPage = ({
  data: {
    wpPage: {
      seo,
      schemaMarkup: { schemaMarkup },
    },
  },
}) => (
  <Layout>
    <Seo
      title={seo.title}
      description={seo.metaDesc}
      canonical={seo.canonical}
      ogImage={seo.twitterImage.localFile.childImageSharp.resize.src}
      ogImageAltText={seo.twitterImage.altText}
    />
    <HomePageContent />
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Home" }) {
      id
      seo {
        title
        metaDesc
        canonical
        twitterImage {
          sourceUrl
          altText
          localFile {
            childImageSharp {
              resize(width: 900, quality: 90) {
                src
              }
            }
          }
        }
      }
      schemaMarkup {
        schemaMarkup
      }
    }
  }
`
