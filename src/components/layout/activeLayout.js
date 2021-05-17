import React from 'react'

import Header from '../header'
import Main from './main'
import Footer from '../footer'

export default function ActiveLayout({ children }) {
  return (
    <div className="h-screen w-full p-0 m-0 overflow-x-hidden bg-gray-200">
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  )
}
