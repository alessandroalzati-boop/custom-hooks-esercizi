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

/*Questo codice crea un Custom Hook React chiamato useCounter che gestisce un contatore con un valore iniziale, 
un incremento/decremento personalizzabile, dei valori minimo e massimo e una funzione per resettare il contatore al valore iniziale,
restituendo { count, increment, decrement, reset }.*/
