import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Temperature({ city, weatherData }) {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (weatherData && weatherData.main) {
      const tempInCelsius = (weatherData.main.temp - 273.15).toFixed(2);
      setTemperature(tempInCelsius);
    }
  }, [weatherData]);

  return (
    <motion.div
      className="bg-zinc-800 h-52 w-52 p-4 rounded-xl flex items-center justify-center shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      
      <p className="text-white text-xl">
        {temperature ? `Temp in ${city}: ${temperature}°C` : "Loading..."}
      </p>
    </motion.div>
  );
}

Temperature.propTypes = {
  city: PropTypes.string.isRequired,
  weatherData: PropTypes.object, 
};

export default Temperature;
