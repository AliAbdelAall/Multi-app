import React from 'react'
import "./style.css"

const Notes = () => {
  return (
    <div className='flex justify-center align-start notes-container'>
      <button className='add-note bg-primary bold white no-bor'>Add Note</button>
    </div>
  )
}

export default Notes