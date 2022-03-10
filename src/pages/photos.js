import React from 'react'

import { Layout, Seo } from '../components/components'
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
