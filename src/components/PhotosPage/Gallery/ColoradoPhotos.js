import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ColoradoPhotos = () => (
  <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/MAROON_BELLS1.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="The Maroon Bells in Aspen, Colorado"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/VAIL1.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Vail, Colorado"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/VAIL2.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Vail, Colorado"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/ASPENS.jpg"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Aspen trees in Colorado"
      />
    </div>
  </section>
)

export default ColoradoPhotos
