import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Me</h1>
      <p>I grew up in Colorado, I love the Lord, play guitar, and run.</p>
      <p>My guitars:</p>
      <ul>
        <li>Fender Stratocaster</li>
        <li>Martin GPCPA4</li>
      </ul>
    </Layout>
  )
}

export default AboutPage
