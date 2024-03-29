import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import "./style.css";

const Note = ({ index, note, notes, setNotes }) => {
  const [content, setContent] = useState(note.content)
  const noteRef = useRef(null)

  const handleContentChange = (e) => {
    setContent(e.target.value)
    const updatedNotes = [...notes]
    updatedNotes[index].content = e.target.value
    setNotes(updatedNotes)
  };

  

  return (
    <Draggable defaultPosition={note.position} onStop={(e, data) => {
      const updatedNotes = [...notes]
      updatedNotes[index].position = { x: data.x, y: data.y }
      setNotes(updatedNotes)
    }}>
      <div className='stick-note' ref={noteRef}>
        <div className="flex column sticky-header">
          <button className='delete-note white' onClick={handleDeleteNote}>X</button>
        </div>
        <textarea value={content} onChange={handleContentChange} cols="30" rows="10"></textarea>
      </div>
    </Draggable>
  );
}

export default Note;
