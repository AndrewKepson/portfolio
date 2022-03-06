import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'

const AboutPage = ({ data: { wpPage: { seo, schemaMarkup: { schemaMarkup} } } }) => (
  <Layout>
    <Seo
      title={seo.title}
      description={seo.metaDesc}
      canonical={seo.canonical}
    />
    <div className="flex flex-col">
      <h1 className="font-roboto text-4xl text-gray-700">About</h1>
      <p className="font-work-sans text-xl text-gray-800 leading-loose">
        I'm Andrew.
      </p>
      <p className="font-work-sans text-xl text-gray-800 leading-loose">
        Not much else to say at this point.
      </p>
    </div>
    <div dangerouslySetInnerHTML={{ __html: schemaMarkup}} />
  </Layout>
)


export default AboutPage

export const query = graphql`
query AboutPageQuery {
  wpPage(title: {eq: "About"}) {
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