import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import Typewriter from 'typewriter-effect'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          fontFamily: 'Work Sans',
          fontSize: '3rem',
          lineHeight: '1.25',
        }}
      >
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Hello! ')
              .pauseFor(500)
              .typeString('My name is Andrew')
              .pauseFor(2000)
              .deleteAll()
              .pauseFor(1000)
              .start()
          }}
          options={{ loop: true, delay: 'natural' }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
