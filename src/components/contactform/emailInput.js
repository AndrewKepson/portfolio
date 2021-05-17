import React from 'react'

const EmailInput = ({ labelClass, inputClass, value, onChange }) => (
  <div className="mb-6">
    <label className={labelClass}>Email Address:</label>
    <input
      className={inputClass}
      type="email"
      name="email"
      value={value}
      placeholder="example@example.com"
      onChange={onChange}
      disabled
    />
  </div>
)

export default EmailInput
