import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'
import HomePageContent from '../components/HomePage'

const IndexPage = ({ data: { wpPage: { seo, schemaMarkup: { schemaMarkup} } } }) => (
  <Layout>
    <Seo
      title={seo.title}
      description={seo.metaDesc}
      canonical={seo.canonical}
    />
    <HomePageContent />
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
  </Layout>
)

export default IndexPage

export const query = graphql`
query HomePageQuery {
  wpPage(title: {eq: "Home"}) {
    id
    seo {
      title
      metaDesc
      canonical
    }
    schemaMarkup {
      schemaMarkup
    }
  }
}
`