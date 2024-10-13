import React, { useContext, useEffect, useState } from 'react'
import { NavBarContext } from '../../NavBar'
import animatedBackground from './animatedBg.module.scss'



const Top = () => {
  const { navBarMobilePosition } = useContext(NavBarContext)
  const { position } = navBarMobilePosition
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  },[navBarMobilePosition])

  return (
    <div
      className={`relative bg-white h-[100%] z-[-10] ${animatedBackground.bg_animation_bottom}`}
      style={{ bottom: `${height - position.top}px` }}>
        <p>x</p>
    </div>
  )
}

export default Top