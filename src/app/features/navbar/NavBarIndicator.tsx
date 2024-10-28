import React, { useEffect, useState } from 'react'
import NavBarStyles from './NavBar.module.scss'

type NavBarIndicator = {
    text: string,
    isActive: boolean
}

const NavBarIndicator = ({isActive, text} : NavBarIndicator) => {
    const [position, setPosition] = useState([0,0])

    useEffect(() => {
        const indicatorPosition = document.getElementById(`desktop_indicator_${text}`)!.getBoundingClientRect()


        const verticalMidPosition = (indicatorPosition.top + indicatorPosition.height/2).toFixed(0)

        const horizontalMidPosition = (indicatorPosition.left + indicatorPosition.width/2).toFixed(0)


    },[text])

  return (
    <span id={`desktop_indicator_${text}`} className='relative h-[30px] w-[30px]'>
        
    </span>
)
}

export default NavBarIndicator