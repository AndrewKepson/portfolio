import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const CityPhotos = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="mb-4 md:mb-0 px-2">
        <StaticImage
          src="../../images/portfolio-photos/STUYVESANT_ST.JPG"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow-lg"
          alt="Stuyvesant Street in New York City"
        />
      </div>
      <div className="mb-4 md:mb-0 px-2">
        <StaticImage
          src="../../images/portfolio-photos/SEATTLE1.jpg"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow-lg mb-2"
          alt="Seattle, Washington"
        />
        <StaticImage
          src="../../images/portfolio-photos/PORTLAND1.jpg"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow-lg"
          alt="Central Park in Portland, Oregon"
        />
      </div>
    </section>
  )
}

export default CityPhotos
