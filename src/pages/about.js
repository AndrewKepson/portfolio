import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Seo } from '../components/components'

const AboutPage = ({
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
    <div className="flex flex-col">
      <h1 className="font-roboto text-4xl text-gray-700">About</h1>
      <p className="font-work-sans text-xl leading-loose text-gray-800">
        I'm Andrew.
      </p>
      <p className="font-work-sans text-xl leading-loose text-gray-800">
        Not much else to say at this point.
      </p>
    </div>
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
  </Layout>
)

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    wpPage(title: { eq: "About" }) {
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
