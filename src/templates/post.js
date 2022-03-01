import React from 'react'
import { graphql } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import {WebPageSchema} from '../components/Schema/WebPage'

import Layout from '../components/layout'
import Seo from '../components/head'

import Classes from '../styles/classes'
const { wrapper, heading, h1, content, date } = Classes.templates.blog

const Post = ({
  data: {
    wpPost: {
      seo,
      uri,
      title,
      date,
      content,
      excerpt,
      categories,
      tags: postTags,
      featuredImage,
    },
  },
}) => {
  const tags = [...postTags.nodes.map(tag => tag.name)]
  const category = categories.nodes[0].name

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useSiteMetadata()

  const schema = {
    title,
    category,
    content,
    excerpt,
    date,
    url: `${siteUrl}${uri}`,
    keywords: seo.metaKeywords,
    topic: category,
  }

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        canonical={`${siteUrl}${uri}`}
      />
      <article className="mb-16 mx-auto prose prose-headings:font-roboto prose-headings:font-semibold prose-h1:text-gray-800 prose-h1:text-5xl prose-h1:text-center prose-h2:text-gray-700 prose-h2:text-4xl prose-h3:text-gray-600 prose-h3:text-3xl prose-a:no-underline prose-a:text-purple-600 hover:prose-a:text-purple-400 font-work-sans text-lg md:text-xl text-gray-900 leading-relaxed prose-img:shadow-xl max-w-full md:w-2/3 lg:w-1/2">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="text-right">{date}</div>
      </article>
      <WebPageSchema name={title} description={seo.metaDesc} uri={uri} />
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      seo {
        canonical
        title
        metaDesc
        metaKeywords
        schema {
          raw
        }
      }
      uri
      title
      date(formatString: "MMMM Do, YYYY")
      excerpt
      tags {
        nodes {
          name
        }
      }
      content
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            absolutePath
            childImageSharp {
              gatsbyImageData(quality: 90)
            }
          }
        }
      }
    }
  }
`
