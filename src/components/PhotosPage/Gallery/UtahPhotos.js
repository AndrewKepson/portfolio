import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const UtahPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      pancakes: file(name: { eq: "UTAH_PANCAKES" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      escalante: file(name: { eq: "ESCALANTE_SUNSET" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      grosvernor1: file(name: { eq: "UTAH_ARCH1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 60
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
      grosvernor2: file(name: { eq: "UTAH_ARCH2" }) {
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
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <GatsbyImage
            image={getImage(data.pancakes)}
            loading="lazy"
            placeholder="blurred"
            className="rounded shadow-2xl"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <GatsbyImage
            image={getImage(data.escalante)}
            loading="lazy"
            placeholder="blurred"
            className="rounded shadow"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full px-2 mb-2">
          <GatsbyImage
            image={getImage(data.grosvernor1)}
            loading="lazy"
            placeholder="blurred"
            className="rounded shadow"
            alt="Grosvernor Arch in Utah"
          />
        </div>
      </div>
      <div className="w-1/2 w-full px-2 mb-2 w-full">
        <GatsbyImage
          image={getImage(data.grosvernor2)}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Grosvernor Arch in Utah"
        />
      </div>
    </section>
  )
}

export default UtahPhotos
