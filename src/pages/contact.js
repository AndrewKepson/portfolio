import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'
import ContactPageContent from '../components/ContactPage'

const ContactPage = ({ data: { wpPage: { seo, schemaMarkup: { schemaMarkup} } } }) => {
  return (
    <Layout>
    <Seo
      title={seo.title}
      description={seo.metaDesc}
      canonical={seo.canonical}
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
    seo {
      title
      metaDesc
      canonical
    }
    schemaMarkup {
      schemaMarkup
    }
  }
}
`