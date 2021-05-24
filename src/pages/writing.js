import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import WritingSamples from '../components/writingsamples'

const Writing = () => (
  <Layout>
    <SEO
      title="Writing"
      description="Writing was my first love. I initially chose marketing as a career path because I wanted to find a way to write for a living. Thank you for reading my samples."
    />
    <WritingSamples />
  </Layout>
)

export default Writing
