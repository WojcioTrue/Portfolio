import React, { useContext } from 'react'
import { NavBarContext } from './NavBar'

const NavBarIndicatorIcon = () => {
  const { indicatorDesktop } = useContext(NavBarContext)
  const { desktopIPosition } = indicatorDesktop

  return (
    <div className={`h-[15px] w-[15px] bg-my-purple absolute rounded-xl translate-x-1/2 translate-y-1/2 transition-all duration-500`} 
    style={{
      top: `${desktopIPosition.verticalMid}px`,
      left: `${desktopIPosition.horizontalMid + 5}px`
    }}></div>
  )
}

export default NavBarIndicatorIcon