import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

import Classes from '../../styles/classes'

const AboutPageContent = () => {
  const { about } = Classes.pages

  const data = useStaticQuery(graphql`
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
  `)

  return (
    <div className={about.wrapper}>
      <div className={about.textContainer}>
        <Fade bottom>
          <h1 className={about.heading}>Headless WordPress Developer Andrew Kepson</h1>
        </Fade>
        <Fade bottom>
          <p className={about.leadingRelaxed}>
            Headless WordPress development. SEO. Content. JavaScript. Focused on site speed,
            privacy-first marketing, and bridging the gap between web
            development and marketing.
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
  )
}

export default AboutPageContent
