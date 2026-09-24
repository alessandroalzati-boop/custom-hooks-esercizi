import { useState } from 'react'
export default function ThemeSwitcher() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div
        className='flex gap-3 items-center w-[60px] h-[60px] justify-center text-4xl rounded-full bg-black relative cursor-pointer text-white'
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? '☾' : '☀'}
      </div>
      <div
        className={`p-3 container my-4 ${
          toggle ? 'bg-black text-white' : 'text-black bg-white'
        }`}
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </div>
    </>
  )
}
