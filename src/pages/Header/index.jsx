import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/common/utilities.css"
import "../../styles/common/colors.css"
import "./style.css"

const Header = () => {
  const [clicked, setClicked] = useState('weather')
  const navigate = useNavigate()
  
  const handleClicked = (item, path) => {
    setClicked(item)
    navigate(path)

    console.log()
  }

  return (
    <div className='flex center header bg-primary' >
      <div 
      className={`flex column center icon-wrapper ${clicked === "weather"? "clicked": "" } white`} 
      onClick={(e)=>handleClicked("weather", "/")}>
        <i className="fa-solid fa-cloud-sun-rain header-icon"></i>
        <p className='bold'>Weather</p>
      </div>
      <div 
      className={`flex column center icon-wrapper ${clicked === "calculator"? "clicked": "" } white`} 
      onClick={(e)=>handleClicked("calculator", "/calc")}>
        <i className="fa-solid fa-calculator header-icon"></i>
        <p className='bold'>Calculator</p>
      </div>
      <div 
      className={`flex column center icon-wrapper ${clicked === "notes"? "clicked": "" } white`}
      onClick={(e)=>handleClicked("notes", "/note")}>
        <i className="fa-solid fa-clipboard header-icon"></i>
        <p className='bold'>Notes</p>
      </div>
    </div>
  )
}

export default Header