import { useState, useEffect, useRef } from 'react';

const useResponsiveHeight = (
  initialWidth: number,
  smallRatio: number,
  largeRatio: number,
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      const elementWidth = elementRef.current?.offsetWidth || initialWidth;
      const calculatedHeight = (elementWidth / smallRatio) * largeRatio;
      setHeight(calculatedHeight);
    }

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [initialWidth, smallRatio, largeRatio]);

  return { elementRef, height };
};

export default useResponsiveHeight