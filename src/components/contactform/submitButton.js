import React from 'react'

const SubmitButton = ({ classes, handler }) => {
  return (
    <button className={classes} type="submit" onClick={handler}>
      Submit
    </button>
  )
}

export default SubmitButton
