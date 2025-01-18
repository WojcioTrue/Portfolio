import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { useContext } from 'react'
import { categories } from '../navItems'
import NavBarIndicatorField from './NavBarIndicatorField'
import { NavBarListElementType } from '../navBarTypes'
import { getIndicatorPosition } from '../navBarHooks/useDefaultIndicator'
import { clickChangeCenter } from "../navBarHooks/useDefaultBackground"

const NavBarListElement = ({ id, text, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { position, setPosition } = navBarDesktopPosition
  const { setIndicatorPosition } = indicatorDesktop


  // change position of indicator when clicked
  const changeIndicatorPos = (ev: React.MouseEvent) => {
    ev.preventDefault()
    const newIndicatorPosition = getIndicatorPosition(text)
    setIndicatorPosition(newIndicatorPosition)
  }

  return (
    <li onClick={
      (event: React.MouseEvent) => {
        clickChangeCenter({
          event,
          position,
          setPosition
        });
        changeIndicatorPos(event);
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : { ...x, active: false }))
      }
    }
      id={id}
      className={`desktop-nav-bar-element px-4 text-md cursor-pointer`}>
      <a className={`flex items-center w-max gap-2 transition-colors ${isActive ? "text-my-purple" : "text-my-black"}`}>
        <NavBarIndicatorField text={text} />
        {text}
      </a>
    </li>
  )
}

export default NavBarListElement