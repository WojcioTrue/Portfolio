import React, { useContext } from 'react'
import { NavBarContext } from '../../NavBar'

const Top = () => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position } = navBarItemPosition

  return (
    <div className='relative bg-green-300 h-[100px] z-[-10]'>
      {`postion top: ${position.top}`}
    </div>
  )
}

export default Top