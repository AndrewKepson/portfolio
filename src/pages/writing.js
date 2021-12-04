import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import WritingPageContent from '../components/WritingPage'

const Writing = () => (
  <Layout>
    <Seo
      title="Writing"
      description="Writing was my first love. I initially chose marketing as a career path because I wanted to find a way to write for a living. Thank you for reading my samples."
    />
    <WritingPageContent />
  </Layout>
)

export default Writing
