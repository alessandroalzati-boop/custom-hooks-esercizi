import { useState } from "react";

export default function useCounter(initialValue = 0, step = 1, min, max) {
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount((e) => (e === max ? e : e + step));
  };

  const decrement = () => {
    setCount((e) => (e === min ? e : e - step));
  };

  const reset = () => {
    setCount(initialValue);
  };
  return { count, increment, decrement, reset };
}
