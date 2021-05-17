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

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <div className="flex flex-col relative p-6 md:p-12 lg:p-16 overflow-hidden">
        <h1 className="mb-5 text-center text-7xl md:text-6xl">
          {data.markdownRemark.frontmatter.title}
        </h1>
        <div
          className="my-8 md:mt-12 lg:mt-14 px-4 md:px-12 lg:px-24 text-left text-2xl md:text-xl lg:text-lg"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        <p className="self-end mr:4 md:mr-12 lg:mr-24 text-lg">
          Published {data.markdownRemark.frontmatter.date}
        </p>
      </div>
    </Layout>
  )
}

export default Blog
