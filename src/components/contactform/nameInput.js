import React from 'react'

const NameInput = ({ labelClass, inputClass, value, onChange }) => (
  <div className="mb-6">
    <label className={labelClass}>Your Name:</label>
    <input
      className={inputClass}
      type="text"
      name="fullName"
      value={value}
      placeholder="Write a text"
      onChange={onChange}
    />
  </div>
)

export default NameInput
