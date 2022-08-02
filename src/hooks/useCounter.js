import { useCallback, useState } from "react";

export const useCounter = (defaultValue) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((state) => {
      return state > 0 ? state - 1 : state;
    });
  }, []);

  const handleReset = useCallback(() => setCount(defaultValue), [defaultValue]); //нужен ли useCallback????

  return { count, handleIncrement, handleDecrement, handleReset };
};
