import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'
import ContactPageContent from '../components/ContactPage'

const ContactPage = ({ data: { wpPage: { schemaMarkup: {schemaMarkup} }} }) => {
  return (
    <Layout>
      <Seo
        title="Contact"
        description="Contact me if you are interested in learning more about SEO, web development, or any of the other topics that I blog about here."
      />
      <ContactPageContent />
      <div dangerouslySetInnerHTML={{ __html: schemaMarkup }} />
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
query ContactPageQuery {
  wpPage(title: {eq: "Contact"}) {
    id
    schemaMarkup {
      schemaMarkup
    }
  }
}
`