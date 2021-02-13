import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
              originalImg
              originalName
            }
          }
        }
      }
      image1: file(name: { eq: "VAIL1" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "images/UTAH_PANCAKES.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
  `)

  return (
    // <div className="flex flex-wrap -mx-4">
    //   {data.allFile.nodes.map(image => (
    //     <div className="sm:w-1/3 px-4 mb-8">
    //       <Img
    //         className="rounded shadow"
    //         fluid={image.childImageSharp.fluid}
    //         alt=""
    //       />
    //     </div>
    //   ))}
    // </div>
    <div>
      <Img fluid={data.image1.childImageSharp.fluid} />
    </div>
  )
}

export default Gallery
