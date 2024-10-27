import React from 'react'
import NavBarStyles from './NavBar.module.scss'

type NavBarIndicator = {
    isActive: boolean
}

const NavBarIndicator = ({isActive} : NavBarIndicator) => {
  return (
    <span className='h-[30px] w-[30px] flex items-center justify-center'>
        <h2 className={`text-red-700 ${!isActive ? 'opacity-0' : 'opacity-55'}`}>X</h2>
    </span>
)
}

export default NavBarIndicator