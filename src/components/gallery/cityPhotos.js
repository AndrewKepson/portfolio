import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CityPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      stuyvesant: file(name: { eq: "STUYVESANT_ST" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      seattle: file(name: { eq: "SEATTLE1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      portland: file(name: { eq: "PORTLAND1" }) {
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
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="mb-4 md:mb-0 px-2">
        <GatsbyImage
          image={getImage(data.stuyvesant)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow-lg"
          alt="Stuyvesant Street in New York City"
        />
      </div>
      <div className="mb-4 md:mb-0 px-2">
        <GatsbyImage
          image={getImage(data.seattle)}
          loading="lazy"
          placeholder="blurred"
          className="mb-2"
          imgClassName="rounded shadow-lg"
          alt="Seattle, Washington"
        />
        <GatsbyImage
          image={getImage(data.portland)}
          loading="lazy"
          placeholder="blurred"
          imgClassName="rounded shadow-lg"
          alt="Central Park in Portland, Oregon"
        />
      </div>
    </section>
  )
}

export default CityPhotos
