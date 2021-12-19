import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const NothingHere = () => {
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
    <article className="bg-white h-full rounded shadow-xl flex">
      <div className="h-full flex flex-col flex-wrap">
        <div className="w-full">
          <GatsbyImage
            image={getImage(data.montanaPhoto)}
            alt="Mountain lake in the autumn"
            height="200"
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-3xl md:text-5xl text-gray-800">
            Nothing to See Here Yet...
          </h3>
          <div>
            <p className="font-body font-light text-2xl text-gray-700">
              Don't see what you're looking for?{' '}
              <Link to="/contact" className="text-primary hover:text-red-600">
                Contact us
              </Link>{' '}
              with your question. Maybe we'll answer with a blog post about it!
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default NothingHere
