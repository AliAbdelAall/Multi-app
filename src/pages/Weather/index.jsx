import React from 'react'
import Header from '../Header'

const Weather = () => {
  
  const getcityCoordinations = async (city) => {
    const apiKey = "yUwM3aTT9rKVJNFHkB7eFg==DXMCc2Esu4tFMBF0"
    const result = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    })
    const response = await result.json()

    getWeatherCondition(response[0])

  }
      
  getcityCoordinations("beirut")

  const getWeatherCondition = async ({ latitude, longitude }) => {
    console.log(latitude, longitude)
    const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto&forecast_days=3`)
    const response = await result.json()
    console.log(response)
  }


  return(
  <div className='flex column center'>
    <div>
      <p>Get the weather condition</p>
      <p>For any city in the world</p>
      <p>for the next 3 days</p>
    </div>
  <input type="text" placeholder='Search for any city'/>



  </div>)
  
}

export default Weather
