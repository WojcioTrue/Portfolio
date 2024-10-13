import React from 'react'

type Button = {
    text: string
}

const Button = ({text}: Button) => {
  return (
    <button className='text-[16px] bg-slate-400 py-[12px] px-[24px] rounded-[50px] text-white bg-gradient-to-tr from-indigo-700 to-pink-500'>{text}</button>
  )
}

export default Button