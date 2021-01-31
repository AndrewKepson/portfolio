import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <h1>Page Not Found</h1>
      <Link to="/">Head Home</Link>
    </Layout>
  )
}

export default NotFound
