import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const UtahPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      escalante: file(name: { eq: "ESCALANTE_SUNSET" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      utahLandscape: file(name: { eq: "UTAH_LANDSCAPE_477" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      arch1: file(name: { eq: "UTAH_ARCH1" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      arch2: file(name: { eq: "UTAH_ARCH2" }) {
        childImageSharp {
          gatsbyImageData(
            quality: 70
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      pancakes: file(name: { eq: "UTAH_PANCAKES" }) {
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
      <div className="flex flex-wrap w-1/2 w-full">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <GatsbyImage
            image={data.pancakes.childImageSharp.gatsbyImageData}
            className="rounded shadow-2xl"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <GatsbyImage
            image={data.escalante.childImageSharp.gatsbyImageData}
            className="rounded shadow"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full px-2 mb-2">
          <GatsbyImage
            image={data.arch1.childImageSharp.gatsbyImageData}
            className="rounded shadow"
            alt="Grosvernor Arch in Utah"
          />
        </div>
      </div>
      <div className="w-1/2 w-full px-2 mb-2 w-full">
        <GatsbyImage
          image={data.arch2.childImageSharp.gatsbyImageData}
          className="rounded shadow"
          alt="Grosvernor Arch in Utah"
        />
      </div>
    </section>
  )
}

export default UtahPhotos
