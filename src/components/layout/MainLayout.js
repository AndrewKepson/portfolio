import React from 'react'

import Headroom from 'react-headroom'

import { Header, Footer } from '../components'

export const Layout = ({ children }) => (
  <div className="m-0 h-screen w-full overflow-x-hidden bg-white p-0">
    <Headroom>
      <Header />
    </Headroom>
    <div className="flex min-h-full flex-col px-4 text-gray-500 lg:px-16 lg:py-6">
      <main className="h-100 flex justify-center pt-4 lg:pt-8">{children}</main>
    </div>
    <Footer />
  </div>
)
