import React from 'react'

const DropdownOption = ({ options }) =>
  options.map((optionText, i) => <option key={i}>{optionText}</option>)

export default DropdownOption
