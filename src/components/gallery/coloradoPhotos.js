import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ColoradoPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      maroonBells1: file(name: { eq: "MAROON_BELLS1" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vailAspens: file(name: { eq: "ASPENS" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vail1: file(name: { eq: "VAIL1" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vail2: file(name: { eq: "VAIL2" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-2 mb-4 md:mb-0">
        <Img
          loading="lazy"
          fluid={data.maroonBells1.childImageSharp.fluid}
          className="rounded shadow"
          alt="The Maroon Bells in Aspen, Colorado"
        />
      </div>
      <div className="p-2 mb-4 md:mb-0">
        <Img
          loading="lazy"
          fluid={data.vail1.childImageSharp.fluid}
          className="rounded shadow"
          alt="Vail, Colorado"
        />
      </div>
      <div className="p-2 mb-4 md:mb-0">
        <Img
          loading="lazy"
          fluid={data.vail2.childImageSharp.fluid}
          className="rounded shadow"
          alt="Vail, Colorado"
        />
      </div>
      <div className="p-2 md:mb-0">
        <Img
          loading="lazy"
          fluid={data.vailAspens.childImageSharp.fluid}
          className="rounded shadow"
          alt="Aspen trees in Colorado"
        />
      </div>
    </section>
  )
}

export default ColoradoPhotos
