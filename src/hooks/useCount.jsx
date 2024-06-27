import { useState } from 'react';

const useCount = (initial, min, max, onDelete) => {
  let [count, setCount] = useState(initial);

  const handleRestar = () => {
    if (count > min) {
      setCount(prev => prev - 1);
    } else if (count === 1) {
      onDelete(); 
    }
  };

  const handleSumar = () => {
    if (count < max) {
      setCount(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCount(initial);
  };

  return { count, handleRestar, handleSumar, handleReset };
};

export default useCount;
