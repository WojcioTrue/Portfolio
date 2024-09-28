import React from 'react'
import Bottom from './Bottom'
import Top from './Top'

const MobileAnimatedBg = () => {
  return (
    <div className='absolute top-[100px] w-full'>
        <Top/>
        <Bottom/>
    </div>
  )
}

export default MobileAnimatedBg