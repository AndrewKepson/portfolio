import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="mb-16 mt-16 px-4 w-full lg:w-8/12">
            <p class="font-light leading-tight mb-6 text-3xl">
              I love words, I love to build websites, and I love to tell
              others&apos; stories.
            </p>
          </div>
          <div class="px-4 w-full lg:w-4/12">
            <img
              src="https://images.unsplash.com/photo-1565972476522-4338522b1929?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDV8fGJ1YmJsZXN8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=800&h=1200&fit=crop"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
