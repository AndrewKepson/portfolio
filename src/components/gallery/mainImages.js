import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MainImages = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <StaticImage
          src="../../../src/images/portfolio-photos/MONTANA_RIVER.jpg"
          loading="lazy"
          className="rounded shadow"
          alt="Glacier National Park in Montana"
        />
      </div>
      <div className="col-span-2 md:col-span-1 px-2 mb-4 md:mb-0">
        <StaticImage
          src="../../../src/images/portfolio-photos/MARRON_BELLS2.jpg"
          loading="lazy"
          className="rounded shadow"
          alt="Aspen, Colorado"
        />
      </div>
    </section>
  )
}

export default MainImages
