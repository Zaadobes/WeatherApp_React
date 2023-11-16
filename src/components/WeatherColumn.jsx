import React from 'react';
import humidity from '../images/humidity.png';
 import wind from '../images/wind.png';

const WeatherColumn = ({humid,windSpeed}) => {
  return (
    <div className="details">
        <div className="col">
            <img src={humidity}/>
            <div>
                <p className="humidity">{humid}%</p>
                <p>Humidity</p>
            </div>
        </div>
        <div className="col">
            <img src={wind}/>
            <div>
                <p className="wind">{`${windSpeed}km/h`}</p>
                <p>Wind Speed</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherColumn;
