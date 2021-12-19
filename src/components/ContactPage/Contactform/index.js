import React from 'react'

import EmailInput from './EmailInput'
import NameInput from './NameInput'
import MessageInput from './MessageInput'
import ServicesDropdown from './ServicesDropdown'
import SubmitButton from './SubmitButton'

import Classes from '../../../styles/classes'

const ContactForm = () => {
  const {
    contact: { form },
  } = Classes.pages

  return (
    <form
      name="contact"
      method="post"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <NameInput labelClass={form.nameLabel} inputClass={form.nameInput} />
      <EmailInput labelClass={form.emailLabel} inputClass={form.emailInput} />

      <ServicesDropdown
        labelClass={form.dropdownLabel}
        selectClass={form.dropdown}
        wrapperClass={form.dropdownArrow}
      />

      <MessageInput
        labelClass={form.messageLabel}
        inputClass={form.messageInput}
      />
      <SubmitButton classes={form.submitButton} />
    </form>
  )
}

export default ContactForm
