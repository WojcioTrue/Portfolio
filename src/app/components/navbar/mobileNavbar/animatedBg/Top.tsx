import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'
import animatedBackground from './animatedBg.module.scss'

const Top = () => {
  const { navBarDesktopPosition } = useContext(NavBarContext)
  const { position } = navBarDesktopPosition

  return (
    <div
      className={`relative bg-white h-[100%] z-[-10] ${animatedBackground.bg_animation_bottom}`}
      style={{ bottom: `${window.innerHeight - position.top}px` }}>
    </div>
  )
}

export default Top