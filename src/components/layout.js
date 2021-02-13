import React, { Fragment } from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col min-h-screen max-w-full">
        <div className="bg-gray-100 py-20 text-gray-500 flex-1 p-8">
          <main className="h-100 mx-auto px-4 flex justify-center">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Layout
