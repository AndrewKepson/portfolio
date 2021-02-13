import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/head'
import Testimonials from '../components/testimonials'

const ContactPage = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(
      `Thanks for your interest, ${values.fullName}! I am not currently accepting any new assignments.`
    )
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <h1>Contact Me</h1>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your Name:
        </label>
        <input
          className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="text"
          name="fullName"
          value={values.fullName}
          placeholder="Write a text"
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address:
        </label>
        <input
          className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          type="email"
          name="email"
          value={values.email}
          placeholder="example@example.com"
          onChange={handleChange}
          disabled
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          I Need Help With:
        </label>
        <div className="relative">
          <select
            className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            name="field-name"
          >
            <option>Web Design or Development</option>
            <option>Blogging or Copywriting</option>
            <option>Blockchain Development</option>
            <option>Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your Message:
        </label>
        <textarea
          className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
          name="message"
          value={values.message}
          rows="5"
          placeholder="How can I help you?"
          onChange={handleChange}
          disabled
        ></textarea>
      </div>
      <div>
        <button
          className="inline-block w-full py-4 px-8 leading-none text-white bg-purple-400 hover:bg-purple-600 font-semibold rounded shadow"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <Testimonials />
      </div>
    </Layout>
  )
}

export default ContactPage
