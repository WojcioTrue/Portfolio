import React, { useContext, useEffect } from 'react'
import Bottom from './Bottom'
import Top from './Top'
import { NavBarContext } from '../../NavBar'


const MobileAnimatedBg = () => {
  const { toogleMobileNav, navBarItemPosition } = useContext(NavBarContext)
  const { displayMenu, setDisplayMenu } = toogleMobileNav
  const { navBarItems } = useContext(NavBarContext)
  const {position,setPosition} = navBarItemPosition

  console.log(position)

  useEffect(() => {
    const navBarListElements = document.getElementsByClassName("mobile-nav-bar-element");
    const isActive = navBarItems.listElements.some((x) => Boolean(x.active) === true)
    // check if there are active elements
     if (displayMenu && (navBarListElements.length > 0 && isActive)) {
        const getActiveSection = navBarItems.listElements.filter(x => x.active === true)
        const activeSectionName = `mobile_navbar_li_${getActiveSection[0].section}`
        const firstLiElement = document.getElementById(activeSectionName)!;

        const elementWidth = firstLiElement.offsetWidth
        // positions for background borders
        const leftValue = Number(firstLiElement.getBoundingClientRect().left.toFixed(0)) + elementWidth;
        const rightValue = document.body.clientWidth - Number(firstLiElement.getBoundingClientRect().right.toFixed(0)) + elementWidth;
        const topValue = Number(firstLiElement.getBoundingClientRect().top.toFixed(0))
        const bottomValue = Number(firstLiElement.getBoundingClientRect().bottom.toFixed(0))

        console.log('displayed')
        const newPosition = {...position, top: topValue, bottom: bottomValue}

        setPosition(newPosition)
    }
}, [displayMenu, navBarItems.listElements])

  return (
    <div className='absolute top-0 h-[100%] w-full z-[-10]'
      style={{ left: `95%` }}
    >
      <Top />
      <Bottom />
    </div>
  )
}

export default MobileAnimatedBg