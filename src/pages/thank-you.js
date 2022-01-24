import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/head'

const ThankYouPage = () => (
  <Layout>
    <Seo
      title="Thank You for Contacting Me | Andrew Kepson"
      description="Thank you for contacting me."
    />
    <div className="flex flex-col h-full lg:mx-16">
      <section class="bg-gray-800 flex flex-col w-full p-4 items-center justify-center">
        <h1 class="text-5xl text-gray-100">Thank You</h1>
        <p class="mt-10 p-10 text-gray-100 md:p-0">
          Thank you for contacting me.&nbsp;
        </p>
        <p className="hover:text-purple-400">
          <Link to="/">Return Home</Link>
        </p>
      </section>
      <StaticImage
        src="../images/portfolio-photos/montana/MONTANA_RIVER.JPG"
        alt="Vail, Colorado"
        placeholder="tracedSVG"
        layout="constrained"
        quality={90}
      />
    </div>
  </Layout>
)

export default ThankYouPage
