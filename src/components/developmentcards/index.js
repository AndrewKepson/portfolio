import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { CodePortfolio } from '../../data/codeProjectsPortfolio'
import DevelopmentCard from './developmentCard'

import Classes from '../../styles/classes'

const { developmentCard } = Classes.components

const DevelopmentCards = () => {
  const data = useStaticQuery(graphql`
    query projectPhotos {
      allFile(
        filter: {
          sourceInstanceName: { eq: "src" }
          relativePath: { regex: "/images/development-project-images/" }
        }
      ) {
        edges {
          node {
            id
            absolutePath
            relativePath
            name
            childImageSharp {
              fluid(quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div className="flex flex-col">
      {CodePortfolio.map((project, i) => {
        return (
          <DevelopmentCard
            key={i}
            classes={developmentCard}
            imgSrc={data.allFile.edges.find(
              edge => edge.node.name === project.photo
            )}
            project={project}
          />
        )
      })}
    </div>
  )
}

export default DevelopmentCards
