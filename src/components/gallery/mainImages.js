import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const MainImages = () => {
  const data = useStaticQuery(graphql`
    {
      montanaRiver: file(name: { eq: "MONTANA_RIVER" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      maroonBells2: file(name: { eq: "MARRON_BELLS2" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 80
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <GatsbyImage
          image={data.montanaRiver.childImageSharp.gatsbyImageData}
          loading="lazy"
          className="rounded shadow"
          alt="Glacier National Park in Montana"
        />
      </div>
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <GatsbyImage
          image={data.maroonBells2.childImageSharp.gatsbyImageData}
          loading="lazy"
          className="rounded shadow"
          alt="Aspen, Colorado"
        />
      </div>
    </section>
  )
}

export default MainImages
