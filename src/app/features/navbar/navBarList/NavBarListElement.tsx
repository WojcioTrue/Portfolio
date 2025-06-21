import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { useContext } from 'react'
import { categories } from '../navItems'
import NavBarIndicatorField from './NavBarIndicatorField'
import { NavBarListElementType } from '../navBarTypes'
import { clickChangeCenter } from "../navBarHooks/useDefaultBackground"
import { Link } from 'react-scroll';
import useDisableScrollEv from "../navBarHooks/useDisableScrollEv"
import { horizontalMidPosition } from "../navBarHooks/useDefaultIndicator"
import useIndicatorRef from "../navBarHooks/useIndicatorRef"
import useLiRef from "../navBarHooks/useLiRef"

const NavBarListElement = ({ id, text, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { position, setPosition } = navBarDesktopPosition
  const { setIndicatorPosition } = indicatorDesktop
  const [disable, disableAfterClick] = useDisableScrollEv()
  const listElementRef = useIndicatorRef()

  const changeIndicatorPos = (ev: React.MouseEvent) => {
    ev.preventDefault()
    const newIndicatorPosition = horizontalMidPosition(listElementRef?.current)
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

  return (
    <Link
      to={text}
      spy={true}
      smooth={true}
      duration={200}
      offset={-77}
    >
      <li onClick={
        (event: React.MouseEvent) => {
          if (!disable) {
            listElementClick(event),
            disableAfterClick()
          }
        }
      }
        id={id}
        ref={useLiRef}
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