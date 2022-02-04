import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import HomePageContent from '../components/HomePage'
import { PersonSchema } from '../components/Schema/Person'
import {WebPageSchema} from '../components/Schema/WebPage'

const IndexPage = () => {
  console.log(PersonSchema)
  return (
    <Layout>
      <Seo
        title="Home"
        description="Andrew Kepson is a digital marketing professional based in Colorado. In addition to SEO, he also enjoys trail running, reading, and occasional blogging."
      />
      <HomePageContent />
      <PersonSchema />
      <WebPageSchema name="Home - Andrew Kepson" description="Andrew Kepson is a digital marketing professional based in Colorado. In addition to SEO, he also enjoys trail running, reading, and occasional blogging." />
    </Layout>
  )
}

export default IndexPage
