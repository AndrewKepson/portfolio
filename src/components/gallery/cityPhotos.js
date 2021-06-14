import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const CityPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      stuyvesant: file(name: { eq: "STUYVESANT_ST" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      seattle: file(name: { eq: "SEATTLE1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      portland: file(name: { eq: "PORTLAND1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="mb-4 md:mb-0 px-2">
        <GatsbyImage
          image={data.stuyvesant.childImageSharp.gatsbyImageData}
          className="rounded shadow-lg"
          alt="Stuyvesant Street in New York City"
        />
      </div>
      <div className="mb-4 md:mb-0 px-2">
        <GatsbyImage
          image={data.seattle.childImageSharp.gatsbyImageData}
          className="rounded shadow-lg mb-2"
          alt="Seattle, Washington"
        />
        <GatsbyImage
          image={data.portland.childImageSharp.gatsbyImageData}
          className="rounded shadow-lg"
          alt="Central Park in Portland, Oregon"
        />
      </div>
    </section>
  )
}

export default CityPhotos
