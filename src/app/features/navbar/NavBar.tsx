"use client"
import NavBarList from "./navBarList/NavBarList"
import { useEffect, useState } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"
import NavBarAnimatedBg from "./NavbarAnimatedBg/NavBarAnimatedBg"
import NavBarIndicatorIcon from "./navBarList/NavBarIndicatorIcon"
import NavBarTitle from "./NavBarTitle"

const NavBar = () => {
  const [fixedMenu, setFixedMenu] = useState<boolean>(false)

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

  return (

    <nav className={
      `${!fixedMenu ? 'absolute' : `!fixed ${navBarStyles.navchange}`} navbar w-full py-3 px-6 overflow-hidden z-10 bg-my-navbarBackground shadow-myshadow`}>
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