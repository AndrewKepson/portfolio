import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'
import HomePageContent from '../components/HomePage'

const IndexPage = ({ data }) => {
  const {schemaMarkup} = data.wpPage.schemaMarkup

  return (
    <Layout>
      <Seo
        title="Home"
        description="Andrew Kepson is a digital marketing professional based in Colorado. In addition to SEO, he also enjoys trail running, reading, and occasional blogging."
      />
      <HomePageContent />
      <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query HomePageQuery {
  wpPage(title: {eq: "Home"}) {
    id
    schemaMarkup {
      schemaMarkup
    }
  }
}
`