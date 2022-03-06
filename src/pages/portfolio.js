import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import PortfolioPageContent from '../components/PortfolioPage'

const Portfolio = () => (
  <Layout>
    <Seo
      title="Portfolio - Andrew Kepson"
      description="Thank you for viewing my portfolio. As a digital marketer, web development and content writing are two skills that I use every day to create engaging digital experiences between brands and their customers."
    />
    <PortfolioPageContent />
  </Layout>
)

export default Portfolio
