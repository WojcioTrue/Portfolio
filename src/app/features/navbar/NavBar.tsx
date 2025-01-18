"use client"
import NavBarList from "./navBarList/NavBarList"
import { useContext, useEffect, useState } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"
import NavBarIndicatorIcon from "./navBarList/NavBarIndicatorIcon"
import NavBarTitle from "./NavBarTitle"
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import useDefaultBackground from "./navBarHooks/useDefaultBackground"
import NavBarAnimatedBg from "./navbarAnimatedBg/NavBarAnimatedBg"
import useDefaultIndicator from "./navBarHooks/useDefaultIndicator"


const NavBar = () => {
  const { navBarItems, navBarDesktopPosition, toogleMobileNav, indicatorDesktop } = useContext(NavBarContext)
  const [fixedMenu, setFixedMenu] = useState<boolean>(false)
  const { displayMenu } = toogleMobileNav

  useEffect(() => {
    displayMenu ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
  }, [displayMenu])

  useEffect(() => {
    const scrolledWindow = () => {
      const scrolled = window.scrollY > 100 ? true : false
      setFixedMenu(scrolled)
    }
    //get initial position after page is loaded/refreshed
    scrolledWindow()
    window.addEventListener('scroll', scrolledWindow)
    // cleanup
    return () => {
      window.removeEventListener('scroll', scrolledWindow)
    }
  }, [])

  useEffect(() => {
    const isActive = navBarItems.listElements.some(x => x.active === true)
    navBarItems.setActive(isActive)
  }, [navBarItems])

  // indicator position
  useDefaultIndicator({
    active: navBarItems.active,
    setIDesktopPosition:
      indicatorDesktop.setIndicatorPosition,
    listElements: navBarItems.listElements
  })

  // default value for background when page is loaded
  useDefaultBackground({
    listElements: navBarItems.listElements,
    navBarDesktopPosition: navBarDesktopPosition.position, setNavBarDesktopPosition: navBarDesktopPosition.setPosition
  })

  return (

    <nav className={
      `${!fixedMenu ? 'absolute' : `!fixed ${navBarStyles.navchange}`} navbar w-full py-3 px-0 md:px-6 overflow-hidden z-10 bg-my-navbarBackground shadow-myshadow`}>
      <span className="flex justify-between items-stretch flex-col md:flex-row max-w-7xl m-auto h-auto z-10 relative">
        <NavBarTitle />
        <NavBarList />
      </span>
      <MobileNavBar />
      <BackDrop />
      <NavBarAnimatedBg />
      <NavBarIndicatorIcon />

    </nav>

  )
}

export default NavBar