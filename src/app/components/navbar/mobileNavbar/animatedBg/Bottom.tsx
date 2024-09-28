import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'


const Bottom = () => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position } = navBarItemPosition

  return (
    <div className={`absolute bg-white h-[100%] w-full z-[-10]`}
    style={{ top: `${position.bottom}px` }}>

    </div>
  )
}

export default Bottom