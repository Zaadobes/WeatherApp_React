import React from 'react'

const WeatherLoc = ({temp,location}) => {
  return (
    <div>
      <h1 className="temp">{Math.round(temp)}°C</h1>
      <h2 className="city">{location}</h2>
    </div>
  );
}

export default WeatherLoc;
