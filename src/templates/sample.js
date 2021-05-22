import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/head'

import Classes from '../styles/classes'
const {
  sample: { wrapper, h1 },
} = Classes.templates

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
      <div className={wrapper}>
        <h1 className={h1}>{markdownRemark.frontmatter.title}</h1>
        <p className="py-4 lg:py-12">{markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </Layout>
  )
}

export default Sample
