import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import "./style.css"


const Note = () => {
  const [allowMove, setAllowMove] = useState(false)
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const stickyNoteRef = useRef()

  const handleMouseDown = (e) => {
    setAllowMove(true)
    const dimentions = stickyNoteRef.current.getBoundingClientRect()
    setDx(e.clientX-dimentions.x)
    setDy(e.clienty-dimentions.Y)

  }

  const handleMouseUp = () => {
    setAllowMove(false)
  }

  return (
    <div className='stick-note' ref={stickyNoteRef}>
      <div 
      className="flex column sticky-header" 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      >
        <button className='delete-note white'>X</button>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      
    </div>
  )
}

export default Note