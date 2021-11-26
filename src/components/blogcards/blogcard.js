import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'

import Classes from '../../styles/classes'
const { blogCard } = Classes.components

export default function BlogCard({
  slug,
  featuredImage,
  title,
  date,
  excerpt,
}) {
  return (
    <Fade bottom>
      <div className={blogCard.cardContainer}>
        <div className={blogCard.card}>
          <GatsbyImage
            image={featuredImage?.childImageSharp?.gatsbyImageData}
            alt={title}
            className={blogCard.img}
          />
          <div className={blogCard.content}>
            <Link to={slug} className={blogCard.slugStyle}>
              <h5 className={blogCard.anchorText}>{title}</h5>
            </Link>
            <h6 className={blogCard.date}>{date}</h6>
            <p className={blogCard.excerpt}>{excerpt}</p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

BlogCard.propTypes = {
  slug: PropTypes.string,
  featuredImage: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}
