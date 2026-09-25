import { useState } from "react";
import useToggle from "../hooks/useToggle";
import Content from "./Content";
import Footer from "./Footer";

export default function ThemeSwitcher() {
  const [toggle, setToggle] = useToggle();

  return (
    <>
      <div
        className="flex gap-3 items-center w-[60px] h-[60px] justify-center text-4xl rounded-full bg-black relative cursor-pointer text-white"
        onClick={() => setToggle(!toggle)}>
        {toggle ? "☾" : "☀"}
      </div>

      <div
        className={`p-3 container my-4 ${
          toggle ? "bg-black text-white" : "text-black bg-white"
        }`}>
        <Content />
        <Footer />
      </div>
    </>
  );
}
