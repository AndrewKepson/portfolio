import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlogCard from './blogcard'

const BlogCards = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allFile(filter: { dir: { regex: "/posts/" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                date
                title
                featuredImage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
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
      {data.allFile.edges.map(post => {
        return (
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
        )
      })}
    </div>
  )
}

export default BlogCards
