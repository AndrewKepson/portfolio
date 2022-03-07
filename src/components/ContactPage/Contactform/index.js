import React from 'react'

import EmailInput from './EmailInput'
import NameInput from './NameInput'
import MessageInput from './MessageInput'
import ServicesDropdown from './ServicesDropdown'
import SubmitButton from './SubmitButton'

const ContactForm = () => (
    <form
      name="contact"
      method="post"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <NameInput labelClass='block text-gray-700 text-sm font-bold mb-2' inputClass='appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none' />
      <EmailInput labelClass='block text-gray-700 text-sm font-bold mb-2' inputClass='appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none' />

      <ServicesDropdown
        labelClass='block text-gray-700 text-sm font-bold mb-2'
        selectClass='appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
        wrapperClass='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'
      />

      <MessageInput
        labelClass='block text-gray-700 text-sm font-bold mb-2'
        inputClass='appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none'
      />
      <SubmitButton classes='inline-block w-full py-4 px-8 leading-none text-white bg-purple-400 hover:bg-purple-600 font-semibold rounded shadow' />
    </form>
  )

export default ContactForm
