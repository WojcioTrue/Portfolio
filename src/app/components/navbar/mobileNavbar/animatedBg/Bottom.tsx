import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'
import animatedBackground from './animatedBg.module.scss'

const Bottom = () => {
  const { navBarDesktopPosition } = useContext(NavBarContext)
  const { position } = navBarDesktopPosition

  return (
    <div className={`absolute bg-white h-[100%] w-full z-[-10] ${animatedBackground.bg_animation_top}`}
    style={{ top: `${position.bottom}px` }}>

    </div>
  )
}

export default Bottom