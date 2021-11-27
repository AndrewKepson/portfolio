import React from 'react'
import PropTypes from 'prop-types'

const NameInput = ({ labelClass, inputClass }) => (
  <div className="mb-6">
    <label className={labelClass} htmlFor="fullNameInput">
      Your Name:
    </label>
    <input
      className={inputClass}
      type="text"
      name="fullName"
      id="fullNameInput"
      placeholder="Name"
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
