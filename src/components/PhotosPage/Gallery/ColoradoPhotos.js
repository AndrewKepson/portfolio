import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ColoradoPhotos = () => (
  <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/MAROON_BELLS1.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow-md"
        alt="The Maroon Bells in Aspen, Colorado"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/VAIL1.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow-md"
        alt="Vail, Colorado"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/VAIL2.JPG"
        className="rounded shadow-md"
        alt="Vail, Colorado"
      />
    </div>
    <div>
      <StaticImage
        src="../../../images/portfolio-photos/colorado/ASPENS.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow-md"
        alt="Aspen trees in Colorado"
      />
    </div>
  </section>
)

export default ColoradoPhotos
