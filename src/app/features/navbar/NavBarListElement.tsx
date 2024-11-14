import { NavBarContext } from './NavBar'
import { useContext } from 'react'
import { categories } from './navItems'
import { mabryProMedium } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from './NavBarIndicatorField'
import { NavBarListElementType } from './navBarTypes'
import { getIndicatorPosition } from './navBarHooks/useDefaultIndicator'

const NavBarListElement = ({ id, text, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { position, setPosition } = navBarDesktopPosition
  const { setIDesktopPosition } = indicatorDesktop

  
  // change position of indicator when clicked
  const changeIndicatorPos = (ev: React.MouseEvent) => {
    ev.preventDefault()
    const newIndicatorPosition = getIndicatorPosition(text)

    setIDesktopPosition(newIndicatorPosition)
  }

  const changeCenter = (ev: React.MouseEvent) => {
    ev.preventDefault();
    // center of current target element
    const elementWidth = Math.round(Number(((ev.currentTarget as HTMLLIElement).offsetWidth)));
    // offset left element with 'left' property
    const leftValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;
    // offset element with 'right' property
    const rightValue = (document.body.clientWidth - (Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))

    const newPosition = { ...position, left: leftValue, right: rightValue }
    setPosition(newPosition)
  }

  return (
    <li onClick={
      (event: React.MouseEvent) => {
        changeCenter(event);
        changeIndicatorPos(event);
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : { ...x, active: false }))
      }
    }
      id={id}
      className={`desktop-nav-bar-element px-4 text-md cursor-pointer ${mabryProMedium.className}`}>
      <a className={`flex items-center w-max gap-2 transition-colors ${isActive ? "text-my-purple" : "text-my-black"}`}>
        <NavBarIndicatorField text={text} />
        {text}
      </a>
    </li>
  )
}

export default NavBarListElement