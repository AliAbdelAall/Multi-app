import React from 'react'
import Note from './StickyNote'
import "./style.css"

const Notes = () => {
  return (
    <div className='flex column align-center notes-container'>
      <button className='add-note bg-primary bold white no-bor'>Add Note</button>
      <Note></Note>
    </div>
  )
}

export default Notes