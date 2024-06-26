import React, { useState, useEffect } from 'react'
import "./style.css"

const Weather = () => {
  const [today, setToday] = useState({})
  const [tomorrow, setTomorrow] = useState({})
  const [after, setAfter] = useState({})
  const [unit, setUnit] = useState("")
  const [city, setCity] = useState("")
  const [loaded, setloaded] = useState(false)

  
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
      

  const getWeatherCondition = async ({ latitude, longitude }) => {

    const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto&forecast_days=3`)

    const response = await result.json()
    const tempArray = response.hourly.temperature_2m
    calulateMinMax(tempArray, 0, 23, setToday)
    calulateMinMax(tempArray, 24, 47, setTomorrow)
    calulateMinMax(tempArray, 48, 71, setAfter)
    setUnit(response.hourly_units.temperature_2m)
    setloaded(true)
    console.log(response)
  }

  const calulateMinMax = (arr, stratIndex, endIndex, setState) => {
    const slicedArr = arr.slice(stratIndex, endIndex + 1)
    const parsedSlicedArr = slicedArr.map(Number)
    const min = Math.min(...parsedSlicedArr)
    const max = Math.max(...parsedSlicedArr)
    setState({
      min: min,
      max: max
    })
  }

  const handleSearch = () => {
    if(city.length >= 3){
      getcityCoordinations(city)
    }
  }

  return(
  <div className='flex column center weather-container'>
    <div className=' flex column weather-wrapper'>
      <p>Search for any city in the world</p>      
      <div className='flex input-wrapper'>
        <input type="text" placeholder='Search for any city' onChange={(e)=>{setCity(e.target.value)}}/>
        <button className='bg-primary bold white' onClick={handleSearch}>Search</button>
      </div>
      {loaded && <div className='flex center temp-wrapper'>
        <div className='flex bold column temp-ele'>
          <div>Today:</div>
          <div>Tomorrow:</div>
          <div>After:</div>
        </div>
        <div className='flex column temp-ele'>
          <div>{`${today.min}${unit} - ${today.max}${unit}`}</div>
          <div>{`${tomorrow.min}${unit} - ${tomorrow.max}${unit}`}</div>
          <div>{`${after.min}${unit} - ${after.max}${unit}`}</div>
        </div>
      </div>}
    </div>
  </div>)
  
}

export default Weather
