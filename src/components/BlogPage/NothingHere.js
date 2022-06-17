import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export const NothingHere = () => (
  <article className="mb-6 flex h-full rounded bg-white shadow-xl">
    <div className="flex h-full flex-col flex-wrap">
      <div className="w-full">
        <StaticImage
          src="../../images/portfolio-photos/montana/MONTANA_RIVER.JPG"
          alt="Mountain lake in the autumn"
          layout="fullWidth"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-3xl text-gray-800 md:text-5xl">
          Nothing to See Here Yet...
        </h3>
        <div>
          <p className="font-body text-2xl font-light text-gray-700">
            Don't see what you're looking for?{' '}
            <Link
              to="/contact"
              className="text-purple-600 hover:text-purple-500"
            >
              Contact me
            </Link>{' '}
            with your question. Maybe I'll answer with a blog post about it!
          </p>
        </div>
      </div>
    </div>
  </article>
)
