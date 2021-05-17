import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/head'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Sample = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <div className="flex flex-col px-4 md:px-24 lg:px-48 items-center text-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl py-4 lg:py-8 md:text-center">
          {markdownRemark.frontmatter.title}
        </h1>
        <p className="py-4 lg:py-12">{markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export default Sample
