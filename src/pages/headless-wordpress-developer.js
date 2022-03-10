import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Seo, HeadlessWPPageContent } from '../components/components'

const HeadlessWPPage = ({
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
    <HeadlessWPPageContent />
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
  </Layout>
)

export default HeadlessWPPage

export const query = graphql`
  query HeadlessWPPageQuery {
    wpPage(title: { eq: "Headless WordPress Developer" }) {
      id
      seo {
        title
        metaDesc
        canonical
        twitterImage {
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
