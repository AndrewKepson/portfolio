import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import Seo from '../components/head'
import Classes from '../styles/classes'
import PersonSchema from '../components/schema/Person'

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
          <Fade bottom>
            <h2 className={about.heading}>I'm Andrew</h2>
          </Fade>
          <Fade bottom>
            <p className={about.leadingRelaxed}>
              Digital marketing. SEO. Content. JavaScript. Interested in site
              speed, blockchain, and privacy-first marketing.
            </p>
          </Fade>
        </div>
        <div className={about.imgContainer}>
          <Fade left>
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              loading="lazy"
              alt="Andrew Kepson in 2020"
              className="rounded shadow-2xl"
            />
          </Fade>
        </div>
      </div>
      <PersonSchema />
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
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
