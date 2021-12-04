import React from 'react'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

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
      }
      html
      fields {
        slug
      }
    }
  }
`

const Blog = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date: publishedDate, tagline },
      html,
      fields: { slug },
    },
  },
}) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata()

  return (
    <Layout>
      <Seo title={title} canonical={`${siteUrl}/blog/${slug}`} />
      <article className={wrapper}>
        <section className={heading}>
          <Fade bottom>
            <h1 className={h1}>{title}</h1>
          </Fade>
          {tagline && <p className="text-lg">{tagline}</p>}
        </section>
        <section
          className={content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p className={date}>Published {publishedDate}</p>
      </article>
    </Layout>
  )
}

export default Blog
