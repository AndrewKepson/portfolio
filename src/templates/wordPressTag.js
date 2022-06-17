import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import { Layout, Seo } from '../components/components'

const WordPressTagTemplate = ({ data: { wpTag } }) => {
  const { siteUrl } = useSiteMetadata()

  return (
    <Layout>
      <Seo
        title={wpTag.seo.title}
        description={wpTag.seo.metaDesc}
        canonical={`${siteUrl}${wpTag.uri}`}
        noIndex
      />
      <section className="grid grid-cols-1 gap-y-2 gap-x-4 lg:grid-cols-6">
        <h1 className="col-span-1 mb-4 text-center font-roboto text-3xl font-normal leading-tight tracking-tighter text-gray-900 md:text-4xl lg:col-span-6 lg:text-5xl">
          {wpTag.name} Archives
        </h1>
        <aside className="text-md col-span-1 font-roboto font-medium lg:col-span-2 lg:text-lg">
          <p dangerouslySetInnerHTML={{ __html: wpTag.description }} />
        </aside>
        <div className="col-span-1 lg:col-span-4">
          {wpTag.posts.nodes.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4">
              {wpTag.posts.nodes.map(post => (
                <li key={post.id}>
                  <TaggedPost post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <p>No posts containing this tag were found.</p>
          )}
        </div>
      </section>
    </Layout>
  )
}

const TaggedPost = ({ post }) => (
  <div
    key={post.id}
    className="grid grid-cols-1 gap-2 rounded-md p-6 shadow-lg md:grid-cols-3"
  >
    <div className="text-md col-span-1 font-roboto font-semibold leading-tight md:col-span-2 lg:text-lg">
      <Link to={post.uri} className="hover:text-purple-600">
        {post.title}
      </Link>
    </div>
    <div className="col-span-1 place-self-center lg:row-span-2">
      <GatsbyImage
        image={getImage(post.featuredImage.node.localFile)}
        alt={post.featuredImage.node.altText}
        className="rounded-md"
      />
    </div>
    <div
      className="text-md col-span-1 font-garamond md:col-span-2"
      dangerouslySetInnerHTML={{ __html: post.excerpt }}
    />
  </div>
)

export default WordPressTagTemplate

export const query = graphql`
  query ($id: String!) {
    wpTag(id: { eq: $id }) {
      id
      name
      slug
      description
      posts {
        nodes {
          title
          uri
          date
          id
          excerpt
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      seo {
        title
        metaDesc
      }
    }
  }
`
