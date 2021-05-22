import React from 'react'
import PropTypes from 'prop-types'

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

NameInput.propTypes = {
  labelClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default NameInput
