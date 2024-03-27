import React from 'react'

const Digit = ({ digit, handleDigitClick }) => {
  return (
    <button onClick={handleDigitClick}>{digit}</button>
  )
}

export default Digit