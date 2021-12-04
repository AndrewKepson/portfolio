import React from 'react'
import PropTypes from 'prop-types'

const MessageInput = ({ labelClass, inputClass }) => (
  <div className="mb-6">
    <label className={labelClass} htmlFor="messageInput">
      Your Message:
    </label>
    <textarea
      className={inputClass}
      name="message"
      id="messageInput"
      rows="5"
      placeholder="How can I help you?"
    ></textarea>
  </div>
)

MessageInput.propTypes = {
  labelClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MessageInput
