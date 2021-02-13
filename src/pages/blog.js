import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container flex flex-wrap -mx-4 justify-center">
        {data.allMarkdownRemark.edges.map(post => (
          <div className="lg:w-4/12 md:w-6/12 p-4 w-full">
            <div className="bg-white shadow-lg">
              <Link to={`/blog/${post.node.fields.slug}`}>
                <img
                  src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                  className="w-full"
                />
              </Link>
              <div className="p-4">
                <Link
                  to={`/blog/${post.node.fields.slug}`}
                  className="block hover:text-purple-400 mb-2 text-gray-800"
                >
                  <h5 className="font-bold leading-tight text-xl">
                    {post.node.frontmatter.title}
                  </h5>
                </Link>
                <h6 className="font-semibold leading-tight mb-2 text-gray-600 text-xs">
                  {post.node.frontmatter.date}
                </h6>
                <p>{post.node.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default BlogPage
