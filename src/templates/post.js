import React from 'react'
import { graphql } from 'gatsby'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { Layout, Seo } from '../components/components'

const Post = ({
  data: {
    wpPost: {
      featuredImage: {
        altText,
        node: {
          localFile: {
            childImageSharp: { ogImg, twitterImg },
          },
        },
      },
      seo,
      uri,
      title,
      date,
      content,
      categories,
      tags: postTags,
    },
  },
}) => {
  // const tags = [...postTags.nodes.map(tag => tag.name)]
  // const category = categories.nodes[0].name

  const { siteUrl } = useSiteMetadata()

  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.metaDesc}
        canonical={`${siteUrl}${uri}`}
        ogType="article"
        ogImg={ogImg.src}
        ogImgAltText={altText}
        twitterImg={twitterImg.src}
      />
      <article className="prose mx-auto mb-16 max-w-full font-work-sans text-lg leading-relaxed text-gray-900 prose-headings:font-roboto prose-headings:font-semibold prose-h1:text-center prose-h1:text-5xl prose-h1:text-gray-800 prose-h2:text-4xl prose-h2:text-gray-700 prose-h3:text-3xl prose-h3:text-gray-600 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-500 prose-img:shadow-xl md:w-2/3 md:text-xl lg:w-1/2">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <div className="text-right">{date}</div>
      </article>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      featuredImage {
        node {
          localFile {
            childImageSharp {
              ogImg: resize(
                cropFocus: ATTENTION
                height: 630
                width: 1200
                quality: 90
              ) {
                src
              }
              twitterImg: resize(
                cropFocus: ATTENTION
                height: 120
                width: 120
                quality: 90
              ) {
                src
              }
            }
          }
        }
      }
      seo {
        canonical
        title
        metaDesc
      }
      uri
      title
      date(formatString: "MMMM Do, YYYY")
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
    }
  }
`
