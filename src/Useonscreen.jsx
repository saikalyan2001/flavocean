import { useState, useEffect, useRef } from 'react';

function useOnScreen(options) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isOnScreen];
}

export default useOnScreen;
