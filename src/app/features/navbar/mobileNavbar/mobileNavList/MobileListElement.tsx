import { NavBarContext } from "../../navBarContext/NavBarContextProvider"
import { useContext, useEffect, useState } from 'react'
import { categories } from '../../navItems'
import { NavBarListElementType } from '../../navBarTypes'
import { getIndicatorPosition } from "../../navBarHooks/useDefaultIndicator"
import MobileIndicatorIcon from "./MobileIndicatorIcon"
import { motion } from "framer-motion"
import { BlurPage } from "../backdrop/BackDropContext"

const MobileListElement = ({ text, id, isActive }: NavBarListElementType) => {
  const { blurPage } = useContext(BlurPage)
  const { navBarItems, indicatorDesktop, toogleMobileNav } = useContext(NavBarContext)
  const { setIndicatorPosition } = indicatorDesktop
  const { setListElements } = navBarItems
  const { setDisplayMenu } = toogleMobileNav
  const { setIsBlur } = blurPage

  const changeActiveLi = () => {
    setListElements(categories.map(x => x.section === text ? { ...x, active: true } : { ...x, active: false }))
  }

  const changeIndicator = (arg: string) => {
    setIndicatorPosition(getIndicatorPosition(arg))
  }

  const scrollTo = (text: string) => {
    const scrollTo = document.getElementById(text)
    scrollTo?.scrollIntoView(
      {
        behavior: 'smooth',
        block: 'nearest'
      }
    )
  }

  const closeMenu = () => {
    setTimeout(() => {
      setDisplayMenu(false)
      setIsBlur(false)
    }, 300)
  }

  return (
    <li onClick={() => {
      changeActiveLi();
      changeIndicator(text);
      scrollTo(text);
      closeMenu();
    }
    }
      id={id}
      className={`mobile-nav-bar-element py-2 pl-1 flex`}>
      <MobileIndicatorIcon active={isActive} />
      <motion.a
        layout
        animate={{
          translateX: isActive ? '10px' : '0px',
        }}
        className={`flex items-center justify-start 
      ${isActive ? `text-my-purple` : `text-my-black`} 
`}>
        {text}
      </motion.a>
    </li>
  )
}

export default MobileListElement