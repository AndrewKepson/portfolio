import React from 'react'
import { Link } from 'gatsby'

import Classes from '../../styles/classes'
const { writingSample } = Classes.components

export default function WritingSample({ slug, title, date, excerpt }) {
  return (
    <div className={writingSample.sampleWrapper}>
      <Link to={`/writing/${slug}`}>
        <img
          src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
          className={writingSample.sampleImage}
          alt="Alt text"
        />
      </Link>
      <div className={writingSample.sampleContent}>
        <h5 className={writingSample.sampleTitle}>{title}</h5>

        <h6 className={writingSample.sampleDate}>{date}</h6>
        <p className={writingSample.sampleExcerpt}>{excerpt}</p>
        <Link to={`/writing/${slug}`} className={writingSample.sampleAnchor}>
          <p>Read Full Piece</p>
        </Link>
      </div>
    </div>
  )
}
