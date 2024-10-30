import React, { useContext } from 'react'
import { NavBarContext } from './NavBar'

const NavBarIndicatorIcon = () => {
  const { indicatorDesktop } = useContext(NavBarContext)
  const { desktopIPosition } = indicatorDesktop

  return (
    <div className={`h-[30px] w-[30px] absolute`}
      style={{
        top: `${desktopIPosition.verticalMid}px`,
        left: `${desktopIPosition.horizontalMid}px`
      }}>
      <span className='absolute w-[25px] h-[25px] rounded-2xl bg-my-purple opacity-25 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'></span>
      <span className='absolute w-[15px] h-[15px] rounded-2xl bg-my-purple opacity-55 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 '></span>
      <span className='absolute w-[5px] h-[5px] rounded-2xl bg-my-purple top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 '></span>
    </div>
  )
}

export default NavBarIndicatorIcon