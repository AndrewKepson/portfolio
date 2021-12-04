import React from 'react'
import PropTypes from 'prop-types'
import ServicesOffered from '../../../data/servicesOffered'

import DropdownOption from './DropdownOption'
import DropdownArrow from './DropdownArrow'

const ServicesDropdown = ({ labelClass, selectClass, wrapperClass }) => (
  <div className="mb-6">
    <label className={labelClass} htmlFor="servicesDropdown">
      I Need Help With:
    </label>
    <div className="relative">
      <select
        className={selectClass}
        name="service-needed"
        id="servicesDropdown"
      >
        <DropdownOption options={ServicesOffered} />
      </select>
      <div className={wrapperClass}>
        <DropdownArrow />
      </div>
    </div>
  </div>
)

ServicesDropdown.propTypes = {
  labelClass: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  wrapperClass: PropTypes.string.isRequired,
}

export default ServicesDropdown