import React from 'react'

const DropdownOption = ({ options }) =>
  options.map(optionText => <option>{optionText}</option>)

export default DropdownOption
