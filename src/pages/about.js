import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import AboutPageContent from '../components/AboutPage'

const AboutPage = () => (
  <Layout>
    <Seo
      title="About"
      description="Andrew Kepson is a digital marketing professional focused on technical SEO for modern websites built in JavaScript frameworks, based in Colorado. Learn more here."
    />
    <AboutPageContent />
  </Layout>
)

export default AboutPage
