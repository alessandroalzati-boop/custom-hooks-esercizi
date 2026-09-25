import { useState } from "react";

export default function useToggle(to = false) {
  const [toggle, setToggle] = useState(to);
  return [toggle, setToggle];
}
