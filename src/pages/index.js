import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import HomePageContent from '../components/HomePage'
import PersonSchema from '../components/Schema/Person'

const IndexPage = () => {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Andrew Kepson is a digital marketing professional based in Colorado. In addition to SEO, he also enjoys trail running, reading, and occasional blogging."
      />
      <HomePageContent />
      <PersonSchema />
    </Layout>
  )
}

export default IndexPage
