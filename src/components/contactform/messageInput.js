import React from 'react'
import PropTypes from 'prop-types'

const MessageInput = ({ labelClass, value, inputClass, onChange }) => (
  <div className="mb-6">
    <label className={labelClass}>Your Message:</label>
    <textarea
      className={inputClass}
      name="message"
      value={value}
      rows="5"
      placeholder="How can I help you?"
      onChange={onChange}
      disabled
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
