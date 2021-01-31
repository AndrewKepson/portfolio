import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import Typewriter from 'typewriter-effect'

import homePageStyles from './home.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={homePageStyles.type}>
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
