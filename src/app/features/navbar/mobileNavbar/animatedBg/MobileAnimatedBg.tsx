import React, { useContext, useEffect, useState } from 'react'
import Bottom from './Bottom'
import Top from './Top'
import { NavBarContext } from "./../../navBarContext/NavBarContextProvider"

const MobileAnimatedBg = () => {
  const { toogleMobileNav, navBarMobilePosition } = useContext(NavBarContext)
  const { displayMenu } = toogleMobileNav
  const { navBarItems } = useContext(NavBarContext)
  const { position, setPosition } = navBarMobilePosition

  useEffect(() => {
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
      } else {
        const topValue = Number(labelElement.getBoundingClientRect().top.toFixed(0))
        const bottomValue = Number(labelElement.getBoundingClientRect().bottom.toFixed(0))
        const newPosition = { ...position, top: topValue, bottom: bottomValue }
        setPosition(newPosition)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayMenu, navBarItems.listElements, setPosition])

  return (
    <div className={`absolute top-0 h-[100%] w-full z-[-10]`}>
      <Top />
      <Bottom />
    </div>
  )
}

export default MobileAnimatedBg