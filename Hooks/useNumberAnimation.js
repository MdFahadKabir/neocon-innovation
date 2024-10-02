import React from "react";
import { useState, useEffect } from "react";

const useNumberAnimation = (
  startNumber,
  endNumber,
  delay = 1000,
  duration = 2
) => {
  const [number, setNumber] = useState(startNumber);

  const updateNumber = () => {
    const totalFrames = Math.floor(duration * 60);
    const increment = (endNumber - startNumber) / totalFrames;

    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        if (prevNumber < endNumber) {
          return prevNumber + increment;
        } else {
          clearInterval(interval);
          return prevNumber;
        }
      });
    }, (duration / totalFrames) * 1000);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      updateNumber();
    }, delay);

    return () => clearTimeout(delayTimer);
  }, []);

  return number;
};

export default useNumberAnimation;
