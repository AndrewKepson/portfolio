import React from 'react'
import ServicesOffered from '../../data/servicesOffered'

import DropdownOption from './dropdownOption'
import DropdownArrow from './dropdownArrow'

const ServicesDropdown = ({ labelClass, selectClass, wrapperClass }) => (
  <div className="mb-6">
    <label className={labelClass}>I Need Help With:</label>
    <div className="relative">
      <select className={selectClass} name="field-name">
        <DropdownOption options={ServicesOffered} />
      </select>
      <div className={wrapperClass}>
        <DropdownArrow />
      </div>
    </div>
  </div>
)

export default ServicesDropdown
