import React from 'react'
import WeatherIcon from './WeatherIcon'
import WeatherLoc from './WeatherLoc';
import WeatherColumn from './WeatherColumn';
 
 const WeatherCard = ({humidity,windSpeed, temperature,location,weatherIcon,display}) => {
 
   return (
    
    <div className={display?"weatherShow" : "weather"} >
    <WeatherIcon weather={weatherIcon} />
     <WeatherLoc temp={temperature} location={location}/>
     <WeatherColumn humid={humidity} windSpeed={windSpeed}/>
  </div>
   )
 }
 
 export default WeatherCard;
 