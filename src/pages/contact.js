import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/head'
import Testimonials from '../components/testimonials'

import ContactForm from '../components/contactform'

const ContactPage = () => {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Contact me if you are interested in learning more about SEO, web development, or any of the other topics that I blog about here."
      />
      <div>
        <h1>Contact Me</h1>
        <ContactForm />
        <Testimonials />
      </div>
    </Layout>
  )
}

export default ContactPage
