import { useEffect, useRef } from 'react';

/**
 * Saves the previous state of the value
 * @param value the current value from the useState (usually) to save its prev value
 * @returns the previous saved value
 */
export const usePrevious = <TValue>(value: TValue) => {
  const ref = useRef<TValue>();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
};
