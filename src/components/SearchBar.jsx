import search from '../images/search.png'
import {useState} from 'react'
import axios from 'axios'
import WeatherCard from './WeatherCard'
import clear from '../images/clear.png'
import clouds from '../images/clouds.png'
import drizzle from '../images/drizzle.png'
import mist from '../images/mist.png'
import rain from '../images/rain.png'
import snow from '../images/snow.png'
import Error from './Error'

const SearchBar = () => {

   const [input, setInput] = useState('')
   const[wind,setwind] = useState("0")
   const[humidity,sethumidity] = useState("0")
   const [weatherIcon, setWeatherIcon]=useState(clouds)
   const [errorMessage, setErrorMessage] = useState("");

   const[display,setDisplay] = useState(false)
  
   const[temp,setTemp] = useState("0")
   const [location, setLocation]= useState('-plaats-')
   const apiKey="";
   const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric" + `&q=${input}` +  `&appid=${apiKey}`;

    const searchHandler = (e)=>{
       // e.preventDefault();

        const fetchWeatherDetails = async()=>{
          try{
            const {data} = await axios.get(apiUrl)
           //console.log(data);
           setDisplay(true)
           setErrorMessage("")

           const{weather,wind,main,name} = data
            //console.log(weather[0].main)
          
            const icon= weather[0].main
            //console.log(icon)
            setwind(wind.speed)
            setTemp(main.temp)
            sethumidity(main.humidity)
            setLocation(name)

            switch(icon){
              case"Clouds":
                setWeatherIcon(clouds);
                break;
              case"Clear":
                setWeatherIcon(clear);
                break;
              case"Rain":
                setWeatherIcon(rain);
                break;
              case"Drizzle":
                setWeatherIcon(drizzle);
                break;
              case"Mist":
                setWeatherIcon(mist);
                break;
              case"Snow":
                setWeatherIcon(snow);

            }
          }

          catch(err){
            if (err.response){

            setDisplay(false)
               console.log(err.response.data);
               console.log(err.response.status);
              // console.log(err.response.headers);

              const error = err.response.data.message
            setErrorMessage(error)                
            }
            else {
              console.log(`Error:${err.message}`)
              setErrorMessage(err.message)
             }
          }
        }
        fetchWeatherDetails();
    }
    
  return (
    <>
      <div className="search">
            <input type="text" 
            value={input} 
            onChange={(e)=>setInput(e.target.value)} 
            onKeyDown={
              (e)=>{
                if(e.key === "Enter") {
                  searchHandler()
                }
              }
            } 
              placeholder="Please enter a location" spellCheck="false"/>
           <button onClick={searchHandler}><img src={search}/></button>
     </div> 
     <Error errorMessage={errorMessage} display={display}/>
     <WeatherCard humidity={humidity} windSpeed={wind} temperature={temp} location={location} weatherIcon={weatherIcon} display={display}/>
    </>
  )
}
  export default SearchBar;
 

        
