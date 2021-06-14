import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import DevelopmentCards from '../components/developmentcards'

const Development = () => {
  return (
    <Layout>
      <div>
        <Seo
          title="Development"
          description="Thank you for viewing my development portfolio. My primary web development technologies include React, Node, MongoDb, and Tailwind CSS."
        />
        <DevelopmentCards />
      </div>
    </Layout>
  )
}

export default Development
