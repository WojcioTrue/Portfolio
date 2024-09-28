import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'

const Top = () => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position } = navBarItemPosition

  return (
    <div
      className='relative bg-green-300 h-[100%] z-[-10]'
      style={{ top: `${549 + position.top}px` }}>
    </div>
  )
}

export default Top