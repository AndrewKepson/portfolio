import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import DevelopmentPageContent from '../components/DevelopmentPage'

const Development = () => (
  <Layout>
    <Seo
      title="Development"
      description="Thank you for viewing my development portfolio. My primary web development technologies include React, Node, MongoDb, and Tailwind CSS."
    />
    <DevelopmentPageContent />
  </Layout>
)

export default Development
