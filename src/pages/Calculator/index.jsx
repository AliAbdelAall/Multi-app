import React, { useState } from 'react'
import "../../styles/common/utilities.css"
import "./style.css"
import Digit from './components/Digit'
import Operation from './components/Operation'

const Calculator = () => {
  const [number, setNumber] = useState("0")
  const [previous, setPrevious] = useState("")

  const handleDigitClick = () => {

  }

  return (
    <div className='flex center clac_container'>
      <div className='caculator-wrapper'>
        <div className='flex column align-end space-between output'>
          <div className='previous'> 12315*</div>
          <div className='current white'>{number}</div>
        </div>
        <button className='span-two'>AC</button>
        <button>DEL</button>
        <Operation operation = "÷"/>
        <Digit digit="1" handleDigitClick={handleDigitClick}/>
        <Digit digit="2" handleDigitClick={handleDigitClick}/>
        <Digit digit="3" handleDigitClick={handleDigitClick}/>
        <Operation operation = "*"/>
        <Digit digit="4" handleDigitClick={handleDigitClick}/>
        <Digit digit="5" handleDigitClick={handleDigitClick}/>
        <Digit digit="6" handleDigitClick={handleDigitClick}/>
        <Operation operation = "+"/>
        <Digit digit="7" handleDigitClick={handleDigitClick}/>
        <Digit digit="8" handleDigitClick={handleDigitClick}/>
        <Digit digit="9" handleDigitClick={handleDigitClick}/>
        <Operation operation = "-"/>
        <Digit digit="." handleDigitClick={handleDigitClick}/>
        <Digit digit="0" handleDigitClick={handleDigitClick}/>
        <button className='span-two'>=</button>
      </div>
    </div>

  )
}

export default Calculator