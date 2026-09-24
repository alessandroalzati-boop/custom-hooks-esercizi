import { useState } from 'react'
export default function Faq({ question, answer }) {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      className='faq--item bg-gray-200 rounded-lg px-3 overflow-hidden my-3'
      onClick={() => setToggle(!toggle)}
    >
      <div className='faq--title uppercase font-bold text-xl my-3 cursor-pointer flex justify-between items-center'>
        {question}
        <span>{toggle ? '-' : '+'}</span>
      </div>
      <div
        className={`faq--answer transition-all ${
          toggle ? 'max-h-[300px] pb-3' : 'max-h-0'
        }`}
      >
        {answer}
      </div>
    </div>
  )
}
