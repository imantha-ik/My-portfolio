import React, { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

const AnimatedCounter = ({ value = 65 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });

    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}</span>;
};

export default AnimatedCounter;

