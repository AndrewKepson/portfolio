import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/head'

import Classes from '../styles/classes'
const { blog } = Classes.templates

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

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <div className={blog.wrapper}>
        <h1 className={blog.h1}>{data.markdownRemark.frontmatter.title}</h1>
        <div
          className={blog.content}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <p className={blog.date}>
          Published {data.markdownRemark.frontmatter.date}
        </p>
      </div>
    </Layout>
  )
}

export default Blog
