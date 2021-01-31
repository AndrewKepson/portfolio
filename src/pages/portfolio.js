import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/head'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1 style={{ fontFamily: `Work Sans` }}>Portfolio</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4  items-center mb-4">
          <div className="px-4 w-full lg:w-7/12">
            <h2 className="font-bold mb-1 text-3xl text-gray-900">
              Thank You For Your Interest in My Work
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
            <div className="bg-gray-100 px-6 py-16 rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 inline-block mb-4 text-gray-900 w-10"
                fill="currentColor"
              >
                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
              </svg>
              <h5 className="font-bold mb-2 text-gray-900 text-xl">
                {' '}
                Development{' '}
              </h5>
              <p className="mb-4">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.{' '}
              </p>
              <a
                href=""
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
            <div
              href="#"
              className="bg-gray-100 px-6 py-16 rounded-lg shadow-lg sm:-mb-16 sm:mt-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 inline-block mb-4 text-gray-900 w-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z" />
                </g>
              </svg>
              <h5 className="font-bold mb-2 text-gray-900 text-xl">
                {' '}
                Content Writing{' '}
              </h5>
              <p className="mb-4">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.{' '}
              </p>
              <a
                href=""
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-full p-4  xl:w-3/12 sm:w-6/12">
            <div href="#" className="bg-gray-100 px-6 py-16 rounded-lg shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 inline-block mb-4 text-gray-900 w-10"
                fill="currentColor"
              >
                <path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z" />
              </svg>
              <h5 className="font-bold mb-2 text-gray-900 text-xl">
                {' '}
                Photography & Digital Art{' '}
              </h5>
              <p className="mb-4">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vitae congue tortor.{' '}
              </p>
              <a
                href=""
                className="hover:text-blue-800 hover:underline text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
