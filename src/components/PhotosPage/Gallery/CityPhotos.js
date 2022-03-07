import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const CityPhotos = () => (
  <section className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2">
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/cities/STUYVESANT_ST.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow-lg"
        alt="Stuyvesant Street in New York City"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/cities/SEATTLE1.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="mb-2"
        imgClassName="rounded shadow-lg"
        alt="Seattle, Washington"
      />
      <StaticImage
        src="../../../images/portfolio-photos/cities/PORTLAND1.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        imgClassName="rounded shadow-lg"
        alt="Central Park in Portland, Oregon"
      />
    </div>
  </section>
)

export default CityPhotos
