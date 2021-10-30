import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'

import Classes from '../styles/classes'
const {
  blog: { wrapper, heading, h1, content, date },
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
      <article className={wrapper}>
        <section className={heading}>
          <h1 className={h1}>{markdownRemark.frontmatter.title}</h1>
          {markdownRemark.frontmatter.tagline && (
            <p className="text-lg">{markdownRemark.frontmatter.tagline}</p>
          )}
        </section>
        <section
          className={content}
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <p className={date}>Published {markdownRemark.frontmatter.date}</p>
      </article>
    </Layout>
  )
}

export default Blog
