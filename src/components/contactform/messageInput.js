import React from 'react'

const MessageInput = ({ onChange, labelClass, value, inputClass }) => (
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

export default MessageInput
