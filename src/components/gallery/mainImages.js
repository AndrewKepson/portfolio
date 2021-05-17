import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MainImages = () => {
  const data = useStaticQuery(graphql`
    {
      montanaRiver: file(name: { eq: "MONTANA_RIVER" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maroonBells2: file(name: { eq: "MARRON_BELLS2" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <Img
          loading="lazy"
          fluid={data.montanaRiver.childImageSharp.fluid}
          className="rounded shadow"
          alt="Glacier National Park in Montana"
        />
      </div>
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <Img
          loading="lazy"
          fluid={data.maroonBells2.childImageSharp.fluid}
          className="rounded shadow"
          alt="Aspen, Colorado"
        />
      </div>
    </section>
  )
}

export default MainImages
