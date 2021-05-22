import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Classes from '../../styles/classes'
const { blogCard } = Classes.components

export default function BlogCard({ slug, title, date, excerpt }) {
  return (
    <div className={blogCard.cardContainer}>
      <div className={blogCard.card}>
        <Link to={slug}>
          <img
            src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
            className={blogCard.img}
          />
        </Link>
        <div className="p-4">
          <Link to={slug} className={blogCard.slugStyle}>
            <h5 className={blogCard.anchorText}>{title}</h5>
          </Link>
          <h6 className={blogCard.date}>{date}</h6>
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
}
