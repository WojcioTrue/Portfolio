import React from 'react'
import Image from 'next/image'

const IconsElement = () => {
  return (
    <div className='
    w-[60px] h-[60px] 
    py-2 px-2 
    border-b-[1px]
    border-r-[1px] 
    border-dashed border-gray-400
    '>
        <Image
            src="/images/broken_glass.png"
            width={60}
            height={60}
            priority={true}
            alt="#"
            className='p-1'
        />
    </div>
  )
}

export default IconsElement