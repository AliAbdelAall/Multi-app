import React, { useState } from 'react'
import "../../styles/common/utilities.css"
import "./style.css"
import Digit from './components/Digit'
import Operation from './components/Operation'

const Calculator = () => {
  const [number, setNumber] = useState("0")
  const [previous, setPrevious] = useState("")
  const [operator, setOperator] = useState("")


  const handleOperationClick = (operation) => {
    if (number !== "") {
        calculateResult();
        setOperator(operation);
        setPrevious(number + " " + operation);
        setNumber("");
    }
  }

  const handleDigitClick = (digit) => {
    if(number === "0" || number == "Infinity"){
      setNumber(digit)
    }
    else{
      if (!(digit === "." && number.includes("."))) {
        setNumber(number + digit);
      }
    }
  }

  return (
    <div className='flex center clac_container'>
      <div className='caculator-wrapper'>
        <div className='flex column align-end space-between output'>
          <div className='previous'>{previous}</div>
          <div className='current white'>{number}</div>
        </div>
        <button className='span-two' onClick={() => {setNumber("0"); setPrevious("")}}>AC</button>
        <button onClick={handleDelete}>DEL</button>
        <Operation operation = "÷" handleOperationClick={handleOperationClick}/>
        <Digit digit="1" handleDigitClick={handleDigitClick}/>
        <Digit digit="2" handleDigitClick={handleDigitClick}/>
        <Digit digit="3" handleDigitClick={handleDigitClick}/>
        <Operation operation = "*" handleOperationClick={handleOperationClick}/>
        <Digit digit="4" handleDigitClick={handleDigitClick}/>
        <Digit digit="5" handleDigitClick={handleDigitClick}/>
        <Digit digit="6" handleDigitClick={handleDigitClick}/>
        <Operation operation = "+" handleOperationClick={handleOperationClick}/>
        <Digit digit="7" handleDigitClick={handleDigitClick}/>
        <Digit digit="8" handleDigitClick={handleDigitClick}/>
        <Digit digit="9" handleDigitClick={handleDigitClick}/>
        <Operation operation = "-" handleOperationClick={handleOperationClick}/>
        <Digit digit="." handleDigitClick={handleDigitClick}/>
        <Digit digit="0" handleDigitClick={handleDigitClick}/>
        <button className='span-two' on onClick={calculateResult}>=</button>
      </div>
    </div>

  )
}

export default Calculator