import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function NorthCarolinaPhotos() {
  const data = useStaticQuery(graphql`
    {
      blueRidge: file(name: { eq: "blue-ridge-1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      fallColors: file(name: { eq: "nc-fall-colors" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      gatlinburg: file(name: { eq: "gatlinburg-river" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
      <div className="md:col-span-3 md:row-span-2">
        <GatsbyImage
          image={getImage(data.blueRidge)}
          className="rounded object-cover shadow-2xl"
          alt="The Blue Ridge Mountains in North Carolina"
          placeholder="blurred"
          layout="fullWidth"
          quality={90}
        />
      </div>
      <div className="grid gap-4 md:col-span-4 md:row-span-1 md:grid-cols-2">
        <GatsbyImage
          image={getImage(data.fallColors)}
          className="rounded shadow-2xl"
          alt="The fall colors in North Carolina"
          placeholder="blurred"
          layout="constrained"
          quality={80}
        />
        <GatsbyImage
          image={getImage(data.gatlinburg)}
          className="rounded shadow-2xl"
          alt="The fall colors in Tennessee at Great Smoky Mountains National Park"
          placeholder="blurred"
          layout="constrained"
          quality={80}
        />
      </div>
    </section>
  )
}
