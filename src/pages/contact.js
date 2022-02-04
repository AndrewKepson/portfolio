import React from 'react'
import { WebPageSchema } from '../components/Schema/WebPage'

import Layout from '../components/layout'
import Seo from '../components/head'
import ContactPageContent from '../components/ContactPage'

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Contact me if you are interested in learning more about SEO, web development, or any of the other topics that I blog about here."
      />
      <ContactPageContent />
      <WebPageSchema name="Contact Andrew Kepson" description="Contact Andrew Kepson." uri="contact" type="ContactPage" />
    </Layout>
  )
}

export default ContactPage
