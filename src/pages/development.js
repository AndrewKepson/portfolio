import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import DevelopmentCards from '../components/developmentcards'

const Development = () => {
  return (
    <Layout>
      <div>
        <SEO title="Development" />
        <h1 className="mb-5">Under Development</h1>
        <DevelopmentCards />
      </div>
    </Layout>
  )
}

export default Development
