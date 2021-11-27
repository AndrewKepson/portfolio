import React from 'react'
import Typewriter from 'typewriter-effect'

const HomePageContent = () => (
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
)

export default HomePageContent
