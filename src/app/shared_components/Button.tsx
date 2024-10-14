import React, { ReactNode } from 'react'

type Button = {
    icon?: ReactNode,
    text: string,
}

const Button = ({icon, text}: Button) => {
  return (
    <button className='flex items-center text-[16px] py-[12px] px-[24px] rounded-[50px] text-white bg-gradient-to-tr from-my-gradient1 to-my-gradient2'>{text} {icon}
</button>
  )
}

export default Button