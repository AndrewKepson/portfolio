import React, { useState } from 'react'

import EmailInput from './emailInput'
import NameInput from './nameInput'
import MessageInput from './messageInput'
import ServicesDropdown from './servicesDropdown'
import SubmitButton from './submitButton'

import Classes from '../../styles/classes'

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
    alert(
      `Thanks for your interest, ${values.fullName}! I am not currently accepting any new assignments.`
    )
  }
  return (
    <>
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
    </>
  )
}

export default ContactForm
