import { useEffect, useState } from "react";
import UI from "./UI";
import axios from "axios";
function App() {
  const [city,setCity]=useState("")
  const [weatherData,setWeatherData]=useState({})
  const [searchCity, setSearchCity] = useState("Rajkot");
  const [loading, setLoading] = useState(false); // Add loading state
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  useEffect(()=>{
    const fetchWeather=async()=>{
      if (!searchCity) return;
      setLoading(true);
      const res=await axios.get(`http://api.weatherapi.com/v1/current.json?key=ed5eb1c6b9f147ba9b8134249240802&q=${searchCity}&aqi=yes`)
      setWeatherData(res.data);
      setLoading(false);
    }
    fetchWeather();
  },[searchCity])
  const search=()=>{
    setSearchCity(city)
  }
  console.log(city)
  return (
    <UI handleCityChange={handleCityChange} search={search} searchCity={searchCity} weatherData={weatherData} loading={loading}/>
  );
}

export default App;
