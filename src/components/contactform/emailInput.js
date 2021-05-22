import React from 'react'
import PropTypes from 'prop-types'

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

EmailInput.propTypes = {
  labelClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default EmailInput
