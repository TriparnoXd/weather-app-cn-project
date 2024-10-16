import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function AirQuality({ city, airQualityData }) {
  const [aqi, setAqi] = useState(null);

  useEffect(() => {
    if (airQualityData && airQualityData.aqi !== undefined) {
      setAqi(airQualityData.aqi);
    } else {
      setAqi("No data available");
    }
  }, [airQualityData]);

  return (
    <motion.div
      className="bg-green-600 h-52 w-52 p-4 rounded-xl flex items-center justify-center shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <p className="text-white text-xl">
        {aqi !== null ? `AQI in ${city}: ${aqi}` : "Loading..."}
      </p>
    </motion.div>
  );
}

AirQuality.propTypes = {
  city: PropTypes.string.isRequired,
  airQualityData: PropTypes.object.isRequired, 
};

export default AirQuality;
