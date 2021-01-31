import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="bg-gray-100 py-20 text-gray-500 flex-1 p-8">
        <main className="h-100 mx-auto px-4">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
