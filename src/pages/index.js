import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Typewriter from 'typewriter-effect'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
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
    </Layout>
  )
}

export default IndexPage
