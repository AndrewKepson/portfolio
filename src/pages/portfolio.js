import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import PortfolioCards from '../components/portfolioCards'

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfolio"
      description="Thank you for viewing my portfolio. As a digital marketer, web development and content writing are two skills that I use every day to create engaging digital experiences between brands and their customers."
    />
    <PortfolioCards />
  </Layout>
)

export default Portfolio
