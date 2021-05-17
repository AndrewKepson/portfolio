import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const UtahPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      escalante: file(name: { eq: "ESCALANTE_SUNSET" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      utahLandscape: file(name: { eq: "UTAH_LANDSCAPE_477" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arch1: file(name: { eq: "UTAH_ARCH1" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arch2: file(name: { eq: "UTAH_ARCH2" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pancakes: file(name: { eq: "UTAH_PANCAKES" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="flex flex-wrap w-1/2 w-full">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <Img
            fluid={data.pancakes.childImageSharp.fluid}
            className="rounded shadow-2xl"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <Img
            fluid={data.escalante.childImageSharp.fluid}
            className="rounded shadow"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full px-2 mb-2">
          <Img
            fluid={data.arch1.childImageSharp.fluid}
            className="rounded shadow"
            alt="Grosvernor Arch in Utah"
          />
        </div>
      </div>
      <div className="w-1/2 w-full px-2 mb-2 w-full">
        <Img
          fluid={data.arch2.childImageSharp.fluid}
          className="rounded shadow"
          alt="Grosvernor Arch in Utah"
        />
      </div>
    </section>
  )
}

export default UtahPhotos
