import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { useContext } from 'react'
import { categories } from '../navItems'
import NavBarIndicatorField from './NavBarIndicatorField'
import { NavBarListElementType } from '../navBarTypes'
import { getIndicatorPosition } from '../navBarHooks/useDefaultIndicator'
import { clickChangeCenter } from "../navBarHooks/useDefaultBackground"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const NavBarListElement = ({ id, text, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop, disableBg } = useContext(NavBarContext)
  const { position, setPosition } = navBarDesktopPosition
  const { setIndicatorPosition } = indicatorDesktop
  const { disable, setDisable } = disableBg
  // change position of indicator when clicked
  const changeIndicatorPos = (ev: React.MouseEvent) => {
    ev.preventDefault()
    const newIndicatorPosition = getIndicatorPosition(text)
    setIndicatorPosition(newIndicatorPosition)
  }

  const listElementClick = (event: React.MouseEvent) => {
    clickChangeCenter({
      event,
      position,
      setPosition
    });
    changeIndicatorPos(event);
    navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : { ...x, active: false }))
  }

  const disableAfterClick = () => {
    setDisable(true)
  }

  return (
    <Link
      activeClass="active"
      to={text}
      spy={true}
      smooth={true}
      duration={200}
    >
      <li onClick={
        (event: React.MouseEvent) => {
          if (!disable) {
            listElementClick(event)
            disableAfterClick()
          }
        }
      }
        id={id}
        className={`desktop-nav-bar-element px-4 text-md cursor-pointer`}>
        <p className={`flex items-center w-max gap-2 transition-colors ${isActive ? "text-my-purple" : "text-my-black"}`}>
          <NavBarIndicatorField text={text} />
          {text}
        </p>
      </li>
    </Link>

  )
}

export default NavBarListElement