import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import DevelopmentCards from '../components/developmentcards'

const Development = () => {
  return (
    <Layout>
      <div>
        <SEO title="Development" />
        <DevelopmentCards />
      </div>
    </Layout>
  )
}

export default Development
