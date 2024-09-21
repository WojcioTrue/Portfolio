import React from 'react'
import Bottom from './Bottom'
import Top from './Top'

const MobileAnimatedBg = () => {
  return (
    <div className='absolute top-0 w-full'>
        <Top/>
        <Bottom/>
    </div>
  )
}

export default MobileAnimatedBg