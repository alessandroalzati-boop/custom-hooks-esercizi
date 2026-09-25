import { useDebugValue, useEffect, useState } from "react";

export default function useLocalStorage(initialValue = 0, id) {
  const [value, setvalue] = useState(() => {
    if (localStorage.getItem(id)) return localStorage.getItem(id);
    return initialValue;
  });

  useEffect(
    () => {
      saveValue();
    },
    { value },
  );

  const saveNote = (newValue) => {
    const copiaValore = [...value, newValue];
    setvalue(copiaValore);
    localStorage.setItem(id, copiaValore);
  };
  return [value, saveValue];
}
