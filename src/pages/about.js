import React from 'react'
import {  } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/head'

const AboutPage = ({data}) => (
  <Layout>
    <Seo
      title="About"
      description="Andrew Kepson is a digital marketing professional focused on technical SEO for modern websites built in JavaScript frameworks, based in Colorado. Learn more here."
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
    <div dangerouslySetInnerHTML={{ __html: data.wpPage.schemaMarkup.schemaMarkup}} />
  </Layout>
)

export default AboutPage

export const query = graphql`
query AboutPageQuery {
  wpPage(title: {eq: "About"}) {
    id
    schemaMarkup {
      schemaMarkup
    }
  }
}
`