import React from 'react'

type Button = {
    text: string
}

const Button = ({text}: Button) => {
  return (
    <button className='text-[16px] bg-slate-400'>{text}</button>
  )
}

export default Button