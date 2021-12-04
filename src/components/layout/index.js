import React from 'react'

import Header from '../Header/index'
import Footer from '../Footer/index'

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full p-0 m-0 overflow-x-hidden bg-gray-200">
      <Header />
      <div className="flex flex-col min-h-full text-gray-500 px-4 lg:px-16 lg:py-6">
        <main className="h-100 flex justify-center pt-4 lg:pt-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
