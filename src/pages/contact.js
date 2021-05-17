import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import Testimonials from '../components/testimonials'

import ContactForm from '../components/contactform'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <h1>Contact Me</h1>
        <ContactForm />
        <Testimonials />
      </div>
    </Layout>
  )
}

export default ContactPage
