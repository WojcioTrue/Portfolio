import React, { useContext } from 'react'
import { NavBarContext } from "./../../navBarContext/NavBarContextProvider"
import animatedBackground from './animatedBg.module.scss'

const Bottom = () => {
  const { navBarMobilePosition } = useContext(NavBarContext)
  const { position } = navBarMobilePosition

  return (
    <div className={`absolute bg-white h-[100%] w-full z-[-10] ${animatedBackground.bg_animation_top}`}
    style={{ top: `${position.bottom}px` }}>

    </div>
  )
}

export default Bottom