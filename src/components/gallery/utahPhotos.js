import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const UtahPhotos = () => {
  return (
    <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
      <div className="flex flex-wrap w-1/2 w-full">
        <div className="w-full md:w-1/2 px-2 mb-2">
          <StaticImage
            src="../../../src/images/portfolio-photos/UTAH_PANCAKES.jpg"
            loading="lazy"
            className="rounded shadow-2xl"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-2">
          <StaticImage
            src="../../../src/images/portfolio-photos/ESCALANTE_SUNSET.jpg"
            loading="lazy"
            className="rounded shadow"
            alt="Escalante Staircase in Utah"
          />
        </div>
        <div className="w-full px-2 mb-2">
          <StaticImage
            src="../../../src/images/portfolio-photos/UTAH_ARCH1.jpg"
            loading="lazy"
            className="rounded shadow"
            alt="Grosvernor Arch in Utah"
          />
        </div>
      </div>
      <div className="w-1/2 w-full px-2 mb-2 w-full">
        <StaticImage
          src="../../../src/images/portfolio-photos/UTAH_ARCH2.jpg"
          loading="lazy"
          className="rounded shadow"
          alt="Grosvernor Arch in Utah"
        />
      </div>
    </section>
  )
}

export default UtahPhotos
