import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MainImages = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="col-span-1">
      <StaticImage
        src="../../../images/portfolio-photos/montana/MONTANA_RIVER.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Glacier National Park in Montana"
      />
    </div>
    <div className="col-span-1">
      <StaticImage
        src="../../../images/portfolio-photos/colorado/MARRON_BELLS2.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Aspen, Colorado"
      />
    </div>
  </section>
)

export default MainImages
