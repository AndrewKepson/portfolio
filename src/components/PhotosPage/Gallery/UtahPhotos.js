import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1">
        <StaticImage
          src="../../../images/portfolio-photos/utah/UTAH_PANCAKES.jpg"
          quality={90}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow-2xl"
          alt="Escalante Staircase in Utah"
        />
      </div>
      <div className="col-span-1">
        <StaticImage
          src="../../../images/portfolio-photos/utah/ESCALANTE_SUNSET.jpg"
          quality={90}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Escalante Staircase in Utah"
        />
      </div>
      <div className="col-span-1 md:col-span-2">
        <StaticImage
          src="../../../images/portfolio-photos/utah/UTAH_ARCH1.jpg"
          quality={90}
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Grosvernor Arch in Utah"
        />
      </div>
      <div className="col-span-1 md:row-span-2 md:hidden">
        <StaticImage
          src="../../../images/portfolio-photos/utah/UTAH_ARCH2.jpg"
          quality={90}
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
