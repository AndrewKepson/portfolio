import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import Gallery from '../components/gallery'

const Photos = () => (
  <Layout>
    <SEO
      title="Photos"
      description="Thank you for viewing my portfolio of photos. I am not a photographer, but I have been to some beautiful places."
    />
    <Gallery />
  </Layout>
)

export default Photos
