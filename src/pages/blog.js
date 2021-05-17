import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import BlogCards from '../components/blogcards'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <BlogCards />
  </Layout>
)

export default BlogPage
