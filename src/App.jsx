import { useState } from "react";
import axios from "axios"; 
import { motion, AnimatePresence } from "framer-motion";
import WeatherCard from "./WeatherCard";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import AirQuality from "./AirQuality";
import SunriseSunset from "./SunriseSunset";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState(""); 
  const [weatherData, setWeatherData] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null); 

  const fetchWeatherData = async (cityName) => {
    const apiKey = "a37d8523a62c57a0bec9bcdb10a4c148"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data); 
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchAirQualityData = async (cityName) => {
    const token = "3e1a1c7d47c9267fcf73a36858fccaac5051fc13"; 
    const url = `https://api.waqi.info/feed/${cityName}/?token=${token}`;

    try {
      const response = await axios.get(url);
      setAirQualityData(response.data.data); 
    } catch (error) {
      console.error("Error fetching air quality data:", error);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setCity(inputValue);
      setSubmitted(true);
      fetchWeatherData(inputValue);
      fetchAirQualityData(inputValue);
    }
  };

  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="relative"
          initial={{ x: 0 }}
          animate={submitted ? { x: -150 } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WeatherCard 
            onSubmit={handleSubmit} 
            setInputValue={setInputValue} 
          />
        </motion.div>
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Temperature city={city} weatherData={weatherData} />
              <Humidity city={city} weatherData={weatherData} />
              <AirQuality city={city} airQualityData={airQualityData} />
              <SunriseSunset city={city} weatherData={weatherData} /> 
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
