import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const NothingHere = () => {
  const data = useStaticQuery(graphql`
    {
      montanaPhoto: file(name: { eq: "MONTANA_RIVER" }) {
        id
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP]
            quality: 70
          )
        }
      }
    }
  `)

  return (
    <article className="mb-6 flex h-full rounded bg-white shadow-xl">
      <div className="flex h-full flex-col flex-wrap">
        <div className="w-full">
          <GatsbyImage
            image={getImage(data.montanaPhoto)}
            alt="Mountain lake in the autumn"
            height="200"
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-3xl text-gray-800 md:text-5xl">
            Nothing to See Here Yet...
          </h3>
          <div>
            <p className="font-body text-2xl font-light text-gray-700">
              Don't see what you're looking for?{' '}
              <Link
                to="/contact"
                className="text-purple-600 hover:text-purple-400"
              >
                Contact me
              </Link>{' '}
              with your question. Maybe I'll answer with a blog post about it!
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
