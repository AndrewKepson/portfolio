import React from 'react'
import Fade from 'react-reveal/Fade'

import ContactForm from './Contactform'
import Testimonials from './Testimonials'

const ContactPageContent = () => (
  <div>
    <Fade left>
      <h1 className="text-3xl md:text-6xl text-gray-800 font-roboto mb-4">
        Contact Me
      </h1>
    </Fade>
    <Fade right>
      <ContactForm />
    </Fade>
    <Fade bottom>
      <Testimonials />
    </Fade>
  </div>
)

export default ContactPageContent
