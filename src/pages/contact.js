import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import Testimonials from '../components/testimonials'

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Me</h1>
      <p>Email</p>
      <p>Phone Number</p>
      <p>
        Social Media: <a href="https://www.twitter.com">Twitter</a>
      </p>
      <Testimonials />
    </Layout>
  )
}

export default ContactPage
