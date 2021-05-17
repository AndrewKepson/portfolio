import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const CityPhotos = () => {
  const data = useStaticQuery(graphql`
    {
      stuyvesant: file(name: { eq: "STUYVESANT_ST" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seattle: file(name: { eq: "SEATTLE1" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portland: file(name: { eq: "PORTLAND1" }) {
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
      <div className="mb-4 md:mb-0 px-2">
        <Img
          fluid={data.stuyvesant.childImageSharp.fluid}
          className="rounded shadow-lg"
          alt="Stuyvesant Street in New York City"
        />
      </div>
      <div className="mb-4 md:mb-0 px-2">
        <Img
          fluid={data.seattle.childImageSharp.fluid}
          className="rounded shadow-lg mb-2"
          alt="Seattle, Washington"
        />
        <Img
          fluid={data.portland.childImageSharp.fluid}
          className="rounded shadow-lg"
          alt="Central Park in Portland, Oregon"
        />
      </div>
    </section>
  )
}

export default CityPhotos
