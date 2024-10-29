import React, { useContext, useEffect, useState } from 'react'
import { NavBarContext } from './NavBar'

const NavBarIndicatorIcon = () => {
  const { indicatorDesktop } = useContext(NavBarContext)
  const { desktopIPosition, setIDesktopPosition } = indicatorDesktop

  // useEffect(() => {
  //   console.log(desktopIPosition)
  // },[setIDesktopPosition])

  return (
    <div className={`h-[15px] w-[15px] bg-red-700 absolute translate-x-1/2 translate-y-1/2 transition-all`} 
    style={{
      top: `${desktopIPosition.verticalMid}px`,
      left: `${desktopIPosition.horizontalMid + 5}px`
    }}></div>
  )
}

export default NavBarIndicatorIcon