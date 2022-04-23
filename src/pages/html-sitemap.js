import React from 'react'
import { Link } from 'gatsby'
import { useWordPressPosts } from '../hooks/useWordPressPosts'

import { Layout, Seo } from '../components/components'

const HTMLSitemap = () => {
  const wpPosts = useWordPressPosts()

  return (
    <Layout>
      <Seo
        title="HTML Sitemap"
        description="Sitemap to easily find Andrew Kepson's blog posts and other pages."
      />
      <div className="grid h-full grid-cols-1 place-content-around text-xl text-gray-700">
        <ul>
          <li>
            <Link className="hover:text-purple-500" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-purple-500"
              to="/headless-wordpress-developer/"
            >
              Headless WordPress Developer
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-purple-500"
              to="/colorado-springs-web-developer/"
            >
              Colorado Springs Web Developer
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/blog">
              Blog
            </Link>
          </li>

          <li>
            <Link className="hover:text-purple-500" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/development">
              Web Development Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/photos">
              Photography
            </Link>
          </li>
          <li>
            <Link className="hover:text-purple-500" to="/contact">
              Contact Me
            </Link>
          </li>
        </ul>

        <h3 className="pt-10 pb-5 font-semibold">Blog Posts:</h3>
        <ul>
          {wpPosts.map(post => (
            <li>
              <Link className="hover:text-purple-500" to={post.uri}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default HTMLSitemap
