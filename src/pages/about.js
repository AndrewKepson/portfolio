import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/head'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <div class="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <h2 className="text-5xl mb-6 leading-tight font-semibold font-heading">
            I'm Andrew
          </h2>
          <p className="mb-8 text-gray-400 leading-relaxed">
            I love the written word. I love building websites. And most of all,
            I love combining them to tell your story. Passionate about
            decentralization, digital marketing, and running on Colorado's
            trails.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Andrew"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    file(relativePath: { eq: "images/802A3320.jpg" }) {
      absolutePath
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
