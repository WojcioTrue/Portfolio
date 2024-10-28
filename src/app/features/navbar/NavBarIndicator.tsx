import React, { useEffect, useContext, useState } from 'react'
import NavBarStyles from './NavBar.module.scss'
import { NavBarContext } from './NavBar'

type navBarIndicatorType = {
    text: string
}

const NavBarIndicator = ({text} : navBarIndicatorType) => {
    const { navBarItems } = useContext(NavBarContext)

    useEffect(() => {
        const activeIndicator = navBarItems.listElements.filter(x => x.active === true)
        if (activeIndicator.length === 1) {
            const indicatorPosition = document.getElementById(`desktop_indicator_${activeIndicator[0].section}`)!.getBoundingClientRect()

            const verticalMidPosition = (indicatorPosition.top + indicatorPosition.height / 2).toFixed(0)

            const horizontalMidPosition = (indicatorPosition.left + indicatorPosition.width / 2).toFixed(0)
            
            console.log(verticalMidPosition, horizontalMidPosition)
        }
    }, [navBarItems.listElements])

    return (
        <span id={`desktop_indicator_${text}`} className='relative h-[30px] w-[30px]'>

        </span>
    )
}

export default NavBarIndicator