import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import BlogPageContent from '../components/BlogPage'

const BlogPage = () => (
  <Layout>
    <Seo
      title="Blog"
      description="Read the thoughts Andrew has over the months and years."
    />
    <BlogPageContent />
  </Layout>
)

export default BlogPage
