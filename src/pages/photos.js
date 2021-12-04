import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import PhotosPageContent from '../components/PhotosPage'

const Photos = () => (
  <Layout>
    <Seo
      title="Photos"
      description="Thank you for viewing my portfolio of photos. I am not a photographer, but I have been to some beautiful places."
    />
    <PhotosPageContent />
  </Layout>
)

export default Photos
