import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ColoradoPhotos = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="p-2 mb-4 md:mb-0">
        <StaticImage
          src="../../../src/images/portfolio-photos/MAROON_BELLS1.jpg"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="The Maroon Bells in Aspen, Colorado"
        />
      </div>
      <div className="p-2 mb-4 md:mb-0">
        <StaticImage
          src="../../images/portfolio-photos/VAIL1.jpg"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Vail, Colorado"
        />
      </div>
      <div className="p-2 mb-4 md:mb-0">
        <StaticImage
          src="../../images/portfolio-photos/VAIL2.jpg"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Vail, Colorado"
        />
      </div>
      <div className="p-2 md:mb-0">
        <StaticImage
          src="../../images/portfolio-photos/ASPENS.jpg"
          loading="lazy"
          placeholder="blurred"
          className="rounded shadow"
          alt="Aspen trees in Colorado"
        />
      </div>
    </section>
  )
}

export default ColoradoPhotos
