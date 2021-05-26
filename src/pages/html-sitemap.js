import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const HTMLSitemap = () => (
  <Layout>
    <div className="h-full grid grid-cols-1 place-content-around text-2xl">
      <ul>
        <li>
          <Link className="hover:text-purple-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/blog">
            Blog
          </Link>
        </li>

        <li>
          <Link className="hover:text-purple-400" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/development">
            Web Development Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/writing">
            Content Writing Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/photos">
            Photography
          </Link>
        </li>
        <li>
          <Link className="hover:text-purple-400" to="/contact">
            Contact Me
          </Link>
        </li>
      </ul>

      <h3 className="pt-10 pb-5">Blog Posts:</h3>
      <ul>
        <li>
          <Link
            className="hover:text-purple-400"
            to="/blog/four-minute-guide-blockchain"
          >
            A Four Minute Guide to Understanding Blockchain
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-purple-400"
            to="/blog/7-people-to-follow-about-blockchain"
          >
            7 People To Follow if You’re Interested in Blockchain
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-purple-400"
            to="/blog/how-and-why-nike-is-using-blockchain"
          >
            How and Why Nike is Using Blockchain to Disrupt the Sneaker Industry
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default HTMLSitemap
