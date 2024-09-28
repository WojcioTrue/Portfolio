import React, { useContext } from 'react'
import Bottom from './Bottom'
import Top from './Top'
import { NavBarContext } from '../../NavBar'

const MobileAnimatedBg = () => {
  const { toogleMobileNav } = useContext(NavBarContext)
  const { displayMenu, setDisplayMenu } = toogleMobileNav

  

  return (
    <div className='absolute top-0 h-[100%] w-full z-[-10]'
      style={{ left: `95%` }}
    >
      <Top />
      <Bottom />
    </div>
  )
}

export default MobileAnimatedBg