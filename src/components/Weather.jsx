import React, { useRef, useState, useEffect } from 'react'
import './Weather.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'

const Weather = () => {
    const inputRef=useRef();
    const[weatherData, setWeatherData]=useState(false);
    const [error, setError] = useState("");
    const allIcons = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        
        "13d": snowIcon,
        "13n": snowIcon,

    }
    const search=async (city) => {
        setError(""); // Clear previous errors
        if(city==="") {
            setError("Please enter a city name");
            return;
        }
        try {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
            const res=await fetch(url);
            const data=await res.json();
            if (res.status !== 200) {
                setWeatherData(false);
                setError(data.message || "Failed to fetch weather data. Check your API key.");
                return;
            }
            const icon = allIcons[data.weather[0].icon] || clearIcon;
            setWeatherData({
                temperature:Math.floor( data.main.temp),
                location: data.name,
                icon:icon,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                weather: data.weather[0].main,
                weatherIcon: data.weather[0].icon
            })
        } catch (error) {
            setWeatherData(false);
            setError("Error fetching weather data. Please try again later.");
            console.error("Error fetching weather data:", error);
        }
    }
    useEffect(() => {search("London")}, []);
  return (
    <div className="weather">
        <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search for a city..." /> 
        <img src={searchIcon} alt="search" onClick={()=>search(inputRef.current.value)} />   
        </div>
        {error && <div className="error-message" style={{color: 'red', margin: '10px 0'}}>{error}</div>}
        {weatherData?<><img src={weatherData.icon} className="weather-icon" alt=""/>
        <p className="temperature">{weatherData.temperature}°C</p>
        <p className="location">{weatherData.location} </p>
        <div className="weather-data">
        <div className="col">
            <img src={humidityIcon} alt="" />
            <div>
                <p>
                    {weatherData.humidity}%
                </p>
                <span>Humidity</span>
            </div>
            </div>  
            <div className="col">
            <img src={windIcon} alt="" />
            <div>
                <p>
                  {weatherData.windSpeed} km/s
                </p>
                <span>Wind speed</span>
            </div>
            </div>    

        </div></>:<></>}
        


       
      
    </div>
  )
}

export default Weather
