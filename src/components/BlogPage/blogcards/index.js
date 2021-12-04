import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

import BlogCard from './Blogcard'

const BlogCards = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allFile(
        filter: { dir: { regex: "/posts/" } }
        sort: {
          order: DESC
          fields: childMarkdownRemark___frontmatter___sortDate
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                date
                sortDate
                title
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 70
                      placeholder: BLURRED
                      formats: [AUTO, WEBP]
                    )
                  }
                }
              }
              html
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="container flex flex-wrap -mx-4 justify-center">
      {data.allFile.edges.map(post => (
        <BlogCard
          key={post.node.childMarkdownRemark.id}
          slug={`/blog/${post.node.childMarkdownRemark.fields.slug}`}
          featuredImage={
            post.node.childMarkdownRemark.frontmatter.featuredImage
          }
          title={post.node.childMarkdownRemark.frontmatter.title}
          date={post.node.childMarkdownRemark.frontmatter.date}
          excerpt={post.node.childMarkdownRemark.excerpt}
        />
      ))}
    </div>
  )
}

export default BlogCards