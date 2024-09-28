import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'


const Bottom = () => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position } = navBarItemPosition

  return (
    <div className='relative bg-blue-300 h-[100px] z-[-10]'>
      {`postion top: ${position.bottom}`}
    </div>
  )
}

export default Bottom