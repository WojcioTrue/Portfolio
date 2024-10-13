import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";


type Button = {
    text: string
}

const Button = ({text}: Button) => {
  return (
    <button className='flex items-center text-[16px] py-[12px] px-[24px] rounded-[50px] text-white bg-gradient-to-tr from-my-gradient1 to-my-gradient2'>{text} <FaLongArrowAltDown />
</button>
  )
}

export default Button