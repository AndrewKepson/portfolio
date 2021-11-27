import React from 'react'
import Fade from 'react-reveal/Fade'

import ContactForm from './Contactform'
import Testimonials from './Testimonials'

const ContactPageContent = () => (
  <div>
    <h1>Contact Me</h1>
    <ContactForm />
    <Fade bottom>
      <Testimonials />
    </Fade>
  </div>
)

export default ContactPageContent
