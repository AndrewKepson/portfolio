import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const HTMLSitemap = () => (
  <Layout>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/development">Web Development Portfolio</Link>
      </li>
      <li>
        <Link to="/writing">Content Writing Portfolio</Link>
      </li>
      <li>
        <Link to="/photos">Photography</Link>
      </li>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
    </ul>
  </Layout>
)

export default HTMLSitemap
