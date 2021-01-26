import React from 'react'

import Header from './header'
import Footer from './footer'

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
