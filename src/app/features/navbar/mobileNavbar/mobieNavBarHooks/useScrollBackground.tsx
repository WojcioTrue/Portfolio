import React, { useEffect, useRef, useContext } from 'react'
import { NavBarContext } from '../../navBarContext/NavBarContextProvider'

const useScrollBackground = () => {
    const { toogleMobileNav, navBarItems, navBarMobilePosition } = useContext(NavBarContext)
    const { displayMenu } = toogleMobileNav
    const { position, setPosition } = navBarMobilePosition

    useEffect(() => {
        const scrollPosition = () => {
            const labelElement = document.getElementById('mobile-navbar-list')!
            const getActiveSection = navBarItems.listElements.filter(x => x.active === true)
            if (displayMenu) {
                if (getActiveSection.length > 0) {
                    const activeSectionName = `mobile_navbar_li_${getActiveSection[0].section}`
                    const firstLiElement = document.getElementById(activeSectionName)!;

                    const topValue = Number(firstLiElement.getBoundingClientRect().top.toFixed(0))
                    const bottomValue = Number(firstLiElement.getBoundingClientRect().bottom.toFixed(0))
                    const newPosition = { ...position, top: topValue, bottom: bottomValue }
                    setPosition(newPosition)
                    console.log('changed')

                } else {
                    const topValue = Number(labelElement.getBoundingClientRect().top.toFixed(0))
                    const bottomValue = Number(labelElement.getBoundingClientRect().bottom.toFixed(0))
                    const newPosition = { ...position, top: topValue, bottom: bottomValue }
                    setPosition(newPosition)
                }
            }
        }
        const mobileScrollDiv = document.getElementById('mobile-menu-scroll');
        mobileScrollDiv!.addEventListener('scroll', scrollPosition)

        return () => {
            mobileScrollDiv!.removeEventListener('scroll', scrollPosition)
        }

    }, [navBarItems.listElements, displayMenu, position, setPosition])
}

export default useScrollBackground