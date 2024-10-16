import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function SunriseSunset({ city, weatherData }) {
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);

  useEffect(() => {
    if (weatherData && weatherData.sys) {
      const sunriseTime = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const sunsetTime = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      setSunrise(sunriseTime);
      setSunset(sunsetTime);
    }
  }, [weatherData]);

  return (
    <motion.div
      className="bg-yellow-600 h-52 w-52 rounded-xl gap-4 p-4 flex flex-col items-center justify-center shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <p className="text-white text-xl">Sunrise in {city}: {sunrise || "Loading..."}</p>
      <p className="text-white text-xl">Sunset in {city}: {sunset || "Loading..."}</p>
    </motion.div>
  );
}

SunriseSunset.propTypes = {
  city: PropTypes.string.isRequired,
  weatherData: PropTypes.object,
};

export default SunriseSunset;
