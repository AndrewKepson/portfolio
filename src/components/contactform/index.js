import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

import EmailInput from './emailInput'
import NameInput from './nameInput'
import MessageInput from './messageInput'
import ServicesDropdown from './servicesDropdown'
import SubmitButton from './submitButton'

import Classes from '../../styles/classes'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  const {
    contact: { form },
  } = Classes.pages
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
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...values,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <NameInput
        labelClass={form.nameLabel}
        inputClass={form.nameInput}
        value={values.fullName}
        onChange={handleChange}
      />
      <EmailInput
        labelClass={form.emailLabel}
        inputClass={form.emailInput}
        value={values.email}
        onChange={handleChange}
      />

      <ServicesDropdown
        labelClass={form.dropdownLabel}
        selectClass={form.dropdown}
        wrapperClass={form.dropdownArrow}
      />

      <MessageInput
        onChange={handleChange}
        value={values.message}
        labelClass={form.messageLabel}
        inputClass={form.messageInput}
      />
      <SubmitButton classes={form.submitButton} handler={handleSubmit} />
    </form>
  )
}

export default ContactForm
