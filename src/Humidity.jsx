import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Humidity({ city, weatherData }) {
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    if (weatherData && weatherData.main) {
      setHumidity(weatherData.main.humidity);
    }
  }, [weatherData]);

  return (
    <motion.div
      className="bg-purple-500 h-52 w-52 rounded-xl p-4 flex items-center justify-center shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      
      <p className="text-white text-xl">
        {humidity !== null ? `Humidity in ${city}: ${humidity}%` : "Loading..."}
      </p>
    </motion.div>
  );
}

Humidity.propTypes = {
  city: PropTypes.string.isRequired,
  weatherData: PropTypes.object,
};

export default Humidity;
