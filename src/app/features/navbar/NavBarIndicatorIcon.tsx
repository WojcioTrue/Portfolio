import React, { useContext, useEffect } from 'react'
import { NavBarContext } from './NavBar'

const NavBarIndicatorIcon = () => {
  const { navBarDesktopPosition } = useContext(NavBarContext)
  const {position} = navBarDesktopPosition

  useEffect(() => {
    console.log(position)
  },[position])

  return (
    <div className='h-[20px] w-[20px] bg-red-700'></div>
  )
}

export default NavBarIndicatorIcon