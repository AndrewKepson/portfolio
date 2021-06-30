import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({ classes }) => {
  return (
    <button className={classes} type="submit">
      Submit
    </button>
  )
}

SubmitButton.propTypes = {
  classes: PropTypes.string.isRequired,
}

export default SubmitButton
