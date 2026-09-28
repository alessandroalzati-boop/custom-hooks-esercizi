import { useState } from "react";

export default function useToggle(to = false) {
  const [toggle, setToggle] = useState(to);
  return [toggle, setToggle];
}

/*Questo codice crea un Custom Hook React chiamato useToggle che utilizza useState per creare uno stato iniziale false (o il valore passato a to)
 e restituisce un array contenente il valore dello stato toggle e la funzione setToggle per modificarlo*/
