import React from 'react'
import Image from 'next/image'

const IconsElement = () => {
  return (
    <div className='w-[60px] h-[60px]'>
        <Image
            src="/images/broken_glass.png"
            width={70}
            height={70}
            alt="#"
            className='p-1'
        />
    </div>
  )
}

export default IconsElement