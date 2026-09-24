import { useState } from 'react'

function getWidthPercent(value, min = 0, max = 100) {
  if (max === min) return 0
  const percent = ((value - min) / (max - min)) * 100
  return Math.min(100, Math.max(0, percent))
}

export default function VolumeControl({
  initialValue = 0,
  step = 1,
  min,
  max,
}) {
  const btnClasses =
    'w-[40px] h-[40px]  text-2xl text-center leading-[40px] rounded-full cursor-pointer bg-gray-300 hover:opacity-80 transition-opacity'

  const [count, setCount] = useState(initialValue)

  return (
    <div className='flex items-center gap-2 '>
      <button className={`${btnClasses}`}>🔇</button>
      <div className='text-center relative'>
        <div className='w-[80px] h-[5px] bg-gray-700 rounded-full relative'>
          <span
            className='inline-block absolute left-1 top-1/2 -translate-y-1/2 h-[3px] bg-gray-200 rounded-full'
            style={{
              width: `calc((100% - 8px) * ${getWidthPercent(count, min, max) /
                100})`,
            }}
          />
        </div>
        <span className='absolute inset-x-0'>{count}</span>
      </div>
      <button className={`${btnClasses}`}>🔊</button>
      <button className={btnClasses}>🔄</button>
    </div>
  )
}
