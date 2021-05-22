import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({ classes, handler }) => {
  return (
    <button className={classes} type="submit" onClick={handler}>
      Submit
    </button>
  )
}

SubmitButton.propTypes = {
  classes: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
}

export default SubmitButton
