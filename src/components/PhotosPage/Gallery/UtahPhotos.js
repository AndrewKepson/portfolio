import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const UtahPhotos = () => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="col-span-1">
      <StaticImage
        src="../../../images/portfolio-photos/utah/UTAH_PANCAKES.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow-2xl"
        alt="Escalante Staircase in Utah"
      />
    </div>
    <div className="col-span-1">
      <StaticImage
        src="../../../images/portfolio-photos/utah/ESCALANTE_SUNSET.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Escalante Staircase in Utah"
      />
    </div>
    <div className="col-span-1 md:col-span-2">
      <StaticImage
        src="../../../images/portfolio-photos/utah/UTAH_ARCH1.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Grosvernor Arch in Utah"
      />
    </div>
    <div className="col-span-1 md:row-span-2 md:hidden">
      <StaticImage
        src="../../../images/portfolio-photos/utah/UTAH_ARCH2.JPG"
        quality={90}
        loading="lazy"
        placeholder="blurred"
        className="rounded shadow"
        alt="Grosvernor Arch in Utah"
      />
    </div>
  </section>
)

export default UtahPhotos
