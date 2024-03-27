import React, { useState} from 'react'

import "../../styles/common/utilities.css"
import "../../styles/common/colors.css"
import "./style.css"

const Header = () => {

  return (
    <div className='flex center header bg-primary' >
      <div 
      className={`flex column center icon-wrapper white`} 
      >
        <i className="fa-solid fa-cloud-sun-rain header-icon"></i>
        <p className='bold'>Weather</p>
      </div>
      <div 
      className={`flex column center icon-wrapper white`} 
      >
        <i className="fa-solid fa-calculator header-icon"></i>
        <p className='bold'>Calculator</p>
      </div>
      <div 
      className={`flex column center icon-wrapper white`}
      >
        <i className="fa-solid fa-clipboard header-icon"></i>
        <p className='bold'>Notes</p>
      </div>
    </div>
  )
}

export default Header