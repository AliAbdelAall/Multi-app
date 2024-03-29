import React, { useState, useEffect } from 'react'
import Note from './StickyNote'
import "./style.css"

const Notes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, []);

  const addNote = () => {
    const newNote = { content: "", position: { x: 0, y: 0 } }
    setNotes([...notes, newNote])
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className='flex column align-center notes-container'>
      <button className='add-note bg-primary bold white no-bor' onClick={addNote}>Add Note</button>
      {notes.map((note, index) => (
        <Note key={index} note={note} index={index} notes={notes} setNotes={setNotes} />
      ))}
    </div>
  )
}

export default Notes
