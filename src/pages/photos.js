import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/head'

const Photos = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(name: { eq: "VAIL1" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Photos" />
      <Img fluid={data.image1.childImageSharp.fluid} alt="Vail Colorado" />
    </Layout>
  )
}

export default Photos
