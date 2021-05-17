import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import PortfolioCards from '../components/portfolioCards'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioCards />
  </Layout>
)

export default Portfolio
