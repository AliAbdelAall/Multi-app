import React from 'react'

const Operation = ({ operation, handleOperationClick }) => {
  return (
    <button onClick={() => {handleOperationClick(operation)}}>{operation}</button>
  )
}

export default Operation