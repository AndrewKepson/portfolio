import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ColoradoPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      maroonBells: file(name: { eq: "MAROON_BELLS1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      vail1: file(name: { eq: "VAIL1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      vail2: file(name: { eq: "VAIL2" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      vailAspens: file(name: { eq: "ASPENS" }) {
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
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-2 mb-4 md:mb-0">
        <GatsbyImage
          image={getImage(data.maroonBells)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="The Maroon Bells in Aspen, Colorado"
        />
      </div>
      <div className="p-2 mb-4 md:mb-0">
        <GatsbyImage
          image={getImage(data.vail1)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Vail, Colorado"
        />
      </div>
      <div className="p-2 mb-4 md:mb-0">
        <GatsbyImage
          image={getImage(data.vail2)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Vail, Colorado"
        />
      </div>
      <div className="p-2 md:mb-0">
        <GatsbyImage
          image={getImage(data.vailAspens)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Aspen trees in Colorado"
        />
      </div>
    </section>
  )
}

export default ColoradoPhotos
