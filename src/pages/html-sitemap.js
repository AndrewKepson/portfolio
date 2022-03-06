import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Seo from '../components/head'
import Layout from '../components/layout'

const HTMLSitemap = () => {
  const { wpPosts } = useStaticQuery(graphql`
  {
    wpPosts: allWpPost {
      edges {
        node {
          id
          uri
          title
        }
      }
    }
  }
`)
  return (
  <Layout>
    <Seo title="HTML Sitemap" description="Sitemap to easily find Andrew Kepson's blog posts and other pages." />
    <div className="h-full grid grid-cols-1 place-content-around text-xl">
      <ul>
        <li>
          <Link className="hover:text-purple-400" to="/">
            Headless WordPress Developer Andrew Kepson - Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/blog">
            Blog
          </Link>
        </li>

        <li>
          <Link className="hover:text-purple-400" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/development">
            Web Development Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/photos">
            Photography
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/contact">
            Contact Me
          </Link>
        </li>
      </ul>

      <h3 className="pt-10 pb-5 font-semibold">Blog Posts:</h3>
      <ul>
        {wpPosts.edges.map(page => (
          <li>
            <Link className="hover:text-purple-400" to={page.node.uri}>{page.node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
}

export default HTMLSitemap
