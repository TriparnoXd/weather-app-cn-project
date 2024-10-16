import { motion } from "framer-motion";
import PropTypes from 'prop-types';

function WeatherCard({ onSubmit, setInputValue }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleButtonClick = () => {
    onSubmit();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <motion.div
      className="bg-yellow-500 h-5/6 w-3/4 min-w-[300px] min-h-[400px] rounded-xl flex flex-col justify-between p-6 shadow-lg"
      initial={{ y:-500, opacity:0  }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 , delay:1.5}}
    >
      <h1 className="text-3xl font-bold text-center">Weather App</h1>
      <input
        type="text"
        placeholder="Enter the city name..."
        className="p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      
      <div className="flex justify-end">
        <motion.button
          className="bg-blue-500 text-white font-bold h-12 w-12 rounded-full"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={handleButtonClick}
        >
          Go
        </motion.button>
      </div>
    </motion.div>
  );
}

WeatherCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setInputValue: PropTypes.func.isRequired, // Update prop types
};

export default WeatherCard;
