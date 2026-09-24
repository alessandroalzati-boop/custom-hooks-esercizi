import { useState } from 'react'
export default function ProductQuantity({
  initialValue = 0,
  step = 1,
  min,
  max,
}) {
  const btnClasses =
    'w-[40px] h-[40px]  text-2xl text-center leading-[40px] cursor-pointer hover:opacity-80 transition-opacity'

  const [count, setCount] = useState(initialValue)

  return (
    <div className='flex items-center gap-2 '>
      <div className='border border-black w-[80px] h-[40px] leading-[40px] text-right px-3'>
        {count}
      </div>
      <button className={`${btnClasses} bg-green-300`}>+</button>
      <button className={`${btnClasses} bg-blue-300`}>-</button>
      <button className='bg-gray-300 h-[40px] leading-[40px] px-4 cursor-pointer hover:opacity-80 transition-opacity'>
        RESET
      </button>
    </div>
  )
}
