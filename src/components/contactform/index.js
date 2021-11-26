import React from 'react'
import Fade from 'react-reveal/Fade'

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

  return (
    <Fade right>
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
    </Fade>
  )
}

export default ContactForm
