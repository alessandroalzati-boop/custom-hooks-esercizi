import { useEffect, useState } from "react";

export default function useLocalStorage(id, initialValue = []) {
  const [value, setvalue] = useState(() => {
    if (localStorage.getItem(id)) return JSON.parse(localStorage.getItem(id));
    return initialValue;
  });
  const saveValue = (newValue) => {
    const copiaValore = [...value, { id: Date.now(), note: newValue }];
    setvalue(copiaValore);
    localStorage.setItem(id, JSON.stringify(copiaValore));
  };

  const delateValue = (id) => {
    const copiaValore = value.filter((v) => v.id !== id);
    setvalue(copiaValore);
    localStorage.setItem(id, JSON.stringify(copiaValore));
  };
  return [value, saveValue, delateValue];
}
