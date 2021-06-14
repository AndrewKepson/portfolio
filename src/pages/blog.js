import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import BlogCards from '../components/blogcards'

const BlogPage = () => (
  <Layout>
    <Seo
      title="Blog"
      description="Read the thoughts Andrew has over the months and years."
    />
    <BlogCards />
  </Layout>
)

export default BlogPage
