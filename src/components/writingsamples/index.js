import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import WritingSample from './writingSample'

import Classes from '../../styles/classes'
const { writingSamples } = Classes.components

const WritingSamples = () => {
  const data = useStaticQuery(graphql`
    query GetSampleData {
      allFile(filter: { relativeDirectory: { eq: "samples" } }) {
        edges {
          node {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
              }
              id
              excerpt
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allFile

  return (
    <div className={writingSamples.container}>
      <div className={writingSamples.content}>
        {edges.map(sample => {
          const {
            node: {
              childMarkdownRemark: {
                id,
                frontmatter: { title, date },
                fields: { slug },
                excerpt,
              },
            },
          } = sample
          return (
            <WritingSample
              key={id}
              slug={slug}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WritingSamples
