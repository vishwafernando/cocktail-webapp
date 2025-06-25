import { useState, useEffect } from 'react';

/**
 * Hook to simulate loading progress
 * @param {number} incrementRate - Random increment rate (default 10)
 * @param {number} interval - Interval between increments in ms (default 400)
 * @returns {number} Current progress value (0-100)
 */
const useLoadingProgress = (incrementRate = 10, interval = 400) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * incrementRate;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, interval);
    
    return () => clearInterval(timer);
  }, [incrementRate, interval]);

  return progress;
};

export default useLoadingProgress;
