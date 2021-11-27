import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function NorthCarolinaPhotos() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 px-2">
      <div className="md:col-span-4 md:row-span-2">
        <StaticImage
          src="../../../images/portfolio-photos/north-carolina/blue-ridge-1.jpg"
          className="rounded shadow-2xl"
          alt="The Blue Ridge Mountains in North Carolina"
          quality={90}
        />
      </div>
      <div className="md:col-span-4 md:row-span-1 grid gap-4 md:grid-cols-2">
        <StaticImage
          src="../../../images/portfolio-photos/north-carolina/nc-fall-colors.jpg"
          className="rounded shadow-2xl"
          alt="The fall colors in North Carolina"
          quality={80}
        />
        <StaticImage
          src="../../../images/portfolio-photos/north-carolina/gatlinburg-river.jpg"
          className="rounded shadow-2xl"
          alt="The fall colors in North Carolina"
          quality={80}
        />
      </div>
    </section>
  )
}
