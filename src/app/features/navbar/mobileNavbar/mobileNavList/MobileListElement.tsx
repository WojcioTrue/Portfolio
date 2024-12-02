// import Image from 'next/image'
import { NavBarContext } from "../../navBarContext/NavBarContextProvider"
import { useContext } from 'react'
import { categories } from '../../navItems'
import { NavBarListElementType } from '../../navBarTypes'
import { getIndicatorPosition } from "../../navBarHooks/useDefaultIndicator"
import NavBarIndicatorIcon from "../../navBarList/NavBarIndicatorIcon"

const MobileListElement = ({text, id, isActive }: NavBarListElementType) => {
  const { navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { setIndicatorPosition } = indicatorDesktop

  const changeIndicator = (arg : string) => {
    setIndicatorPosition(getIndicatorPosition(arg))
  }

  return (
    <li onClick={() => {
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : { ...x, active: false }))
        changeIndicator(text)
      }
    } 
    id={id} 
    className={`mobile-nav-bar-element px-2 py-2 pl-3`}>
      {/* <NavBarIndicatorIcon height="30" width="30"/> */}
      <a className={`flex items-center justify-start ${isActive ? `text-white` : `text-my-black`}`}>
        {text}
      </a>
    </li>
  )
}

export default MobileListElement