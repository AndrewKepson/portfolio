import React from 'react'

export default function Main({ children }) {
  return (
    <div className="flex flex-col min-h-full text-gray-500 px-4 lg:px-16 lg:py-6">
      <main className="h-100 flex justify-center pt-4 lg:pt-8">{children}</main>
    </div>
  )
}
