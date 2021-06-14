import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/head'
import Classes from '../styles/classes'

const AboutPage = ({ data }) => {
  const { about } = Classes.pages
  return (
    <Layout>
      <Seo
        title="About"
        description="Andrew Kepson is a digital marketing professional focused on technical SEO for modern websites built in JavaScript frameworks, based in Colorado. Learn more here."
      />
      <div className={about.wrapper}>
        <div className={about.textContainer}>
          <h2 className={about.heading}>I'm Andrew</h2>
          <p className={about.leadingRelaxed}>
            Digital marketing. SEO. Content. JavaScript. Interested in site
            speed, blockchain, and privacy-first marketing.
          </p>
        </div>
        <div className={about.imgContainer}>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            loading="lazy"
            alt="Andrew"
            className="rounded shadow-2xl"
          />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    file(name: { eq: "802A3320" }) {
      absolutePath
      childImageSharp {
        gatsbyImageData(
          quality: 60
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
