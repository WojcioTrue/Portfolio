// import Image from 'next/image'
import { NavBarContext } from "../../navBarContext/NavBarContextProvider"
import { useContext } from 'react'
import { categories } from '../../navItems'
import { NavBarListElementType } from '../../navBarTypes'
import { getIndicatorPosition } from "../../navBarHooks/useDefaultIndicator"
import MobileIndicatorIcon from "./MobileIndicatorIcon"
import { motion } from "framer-motion"


const MobileListElement = ({ text, id, isActive }: NavBarListElementType) => {
  const { navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { setIndicatorPosition } = indicatorDesktop

  const changeIndicator = (arg: string) => {
    setIndicatorPosition(getIndicatorPosition(arg))
  }

  return (
    <li onClick={() => {
      navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : { ...x, active: false }))
      changeIndicator(text)
    }
    }
      id={id}
      className={`mobile-nav-bar-element py-2 pl-1 flex`}>
      <MobileIndicatorIcon active={isActive} />
      <motion.a
        layout
        initial={{
          translateX: '-15px',
        }}
        animate={{
          translateX: isActive ? '0px' : '-15px',
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