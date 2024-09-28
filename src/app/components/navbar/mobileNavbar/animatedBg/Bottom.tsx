import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'


const Bottom = () => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position } = navBarItemPosition

  return (
    <div className={`absolute bg-blue-300 h-[100px] w-full z-[-10]`}
    style={{ top: `${position.bottom}px` }}>

    </div>
  )
}

export default Bottom