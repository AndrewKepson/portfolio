import React from 'react'

import Header from '../Header'
import Main from './Main'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full p-0 m-0 overflow-x-hidden bg-gray-200">
      <Header />
      <Main children={children} />
      <Footer />
    </div>
  )
}
