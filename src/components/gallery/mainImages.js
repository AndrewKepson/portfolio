import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const MainImages = () => {
  const data = useStaticQuery(graphql`
    {
      montanaRiver: file(name: { eq: "MONTANA_RIVER" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      maroonBells2: file(name: { eq: "MARRON_BELLS2" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)

  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <GatsbyImage
          image={getImage(data.montanaRiver)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Glacier National Park in Montana"
        />
      </div>
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <GatsbyImage
          image={getImage(data.maroonBells2)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Aspen, Colorado"
        />
      </div>
    </section>
  )
}

export default MainImages
