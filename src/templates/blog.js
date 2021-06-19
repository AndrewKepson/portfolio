import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'

import Classes from '../styles/classes'
const {
  blog: { wrapper, h1, content, date },
} = Classes.templates

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        canonical
      }
      html
    }
  }
`

const Blog = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <Seo
        title={markdownRemark.frontmatter.title}
        canonical={markdownRemark.frontmatter.canonical || null}
      />
      <div className={wrapper}>
        <h1 className={h1}>{markdownRemark.frontmatter.title}</h1>

        <div
          className={content}
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <p className={date}>Published {markdownRemark.frontmatter.date}</p>
      </div>
    </Layout>
  )
}

export default Blog
