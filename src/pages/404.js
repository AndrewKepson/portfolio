import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Seo title="Page Not Found" />
      <div className="flex flex-col items-center justify-around">
        <p>This is a</p>
        <h1 className="text-5xl">404</h1>
        <p>
          That means you've tried to land on a page on the website that doesn't
          exist!
        </p>
        <Link to="/">Head Home</Link>
      </div>
    </Layout>
  )
}

export default NotFound
