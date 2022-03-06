import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'
import BlogPageContent from '../components/BlogPage'

const BlogPage = ({ data: { wpPage: { seo, schemaMarkup: { schemaMarkup} } } }) => (
  <Layout>
    <Seo
      title={seo.title}
      description={seo.metaDesc}
      canonical={seo.canonical}
    />
    <BlogPageContent />
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup}} />
  </Layout>
)

export default BlogPage

export const query = graphql`
query BlogPageQuery {
  wpPage(title: {eq: "Blog"}) {
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