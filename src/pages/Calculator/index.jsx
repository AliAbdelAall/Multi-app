import React from 'react'
import "../../styles/common/utilities.css"
import "./style.css"

const Calculator = () => {
  return (
    <div className='flex center clac_container'>
      <div className='caculator-wrapper'>
        <div className='flex column align-end space-between output'>
          <div className='previous'> 12315*</div>
          <div className='current white'>123123</div>
        </div>
        <button className='span-two'>AC</button>
        <button>DEL</button>
        <button>÷</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className='span-two'>=</button>
      </div>
    </div>

  )
}

export default Calculator