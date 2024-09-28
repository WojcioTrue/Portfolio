import React from 'react'
import Bottom from './Bottom'
import Top from './Top'

const MobileAnimatedBg = () => {
  return (
    <div className='absolute h-full top-[100px] w-full z-[-10]'>
        <Top/>
        <Bottom/>
    </div>
  )
}

export default MobileAnimatedBg