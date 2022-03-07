import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'
const BlogCard = ({ slug, featuredImage, title, date, excerpt }) => (
  <Fade bottom>
    <div className="flex w-full content-between items-stretch p-6 md:w-1/2 lg:w-1/3">
      <div className="flex flex-col rounded-lg border-0 bg-gray-100 pb-6 shadow-lg">
        <GatsbyImage
          image={getImage(featuredImage.node.localFile)}
          alt={featuredImage.node.altText}
          className="h-1/2 w-full rounded-t-lg"
          imgClassName="h-1/2"
        />
        <div className="p-3 pt-3 md:px-6 md:pt-6">
          <Link
            to={slug}
            className="mb-2 block font-roboto text-gray-800 hover:text-purple-400"
          >
            <h5 className="text-lg font-bold leading-tight md:text-xl">
              {title}
            </h5>
          </Link>
          <h6 className="mb-2 text-xs font-semibold leading-tight text-gray-600">
            {date}
          </h6>
          <p
            className="font-work-sans text-xs md:text-lg"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </div>
  </Fade>
)

export default BlogCard

BlogCard.propTypes = {
  slug: PropTypes.string,
  featuredImage: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}
