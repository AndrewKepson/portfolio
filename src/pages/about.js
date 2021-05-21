import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/head'
import Classes from '../styles/classes'

const AboutPage = ({ data }) => {
  const { about } = Classes.pages
  return (
    <Layout>
      <SEO title="About" />
      <div className={about.wrapper}>
        <div className={about.textContainer}>
          <h2 className={about.heading}>I'm Andrew</h2>
          <p className={about.leadingRelaxed}>
            I had my first brush with digital marketing at age 15, when my
            friends and I posted a skateboarding video on YouTube and gained
            over 100,000 views in the matter of a few weeks.
          </p>
          <p className={about.leadingRelaxed}>
            That same year, I was introduced to web development, styling my
            friends' MySpace pages in CSS, and building basic HTML pages on free
            hosting platforms.
          </p>
          <p className={about.leadingRelaxed}>
            At the time I was just having fun, and I didn't realize that I was
            learning the skills that were quickly becoming the foundation of a
            new generation of marketing, platform-building, and
            decentralization.
          </p>
          <p className={about.leadingRelaxed}>
            Like so many others, the pandemic forced me to rethink my life's
            direction, and I decided to double down on my education, committing
            to a web development bootcamp, spending every day in the trenches
            with my fellow students as we learned to build fully functioning web
            applications.
          </p>
          <p className={about.leadingRelaxed}>
            Today, I am excited to be utilizing all of my skills and passions to
            help businesses build their brands on the internet as an SEO Analyst
            for the United States' leading digital marketing firm, SocialSEO.
          </p>
        </div>
        <div className={about.imgContainer}>
          <Img
            fluid={data.file.childImageSharp.fluid}
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
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
