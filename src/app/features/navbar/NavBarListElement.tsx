import { NavBarContext } from './NavBar'
import { useContext, useEffect, useCallback } from 'react'
import { categories } from './navItems'
import { mabryProMedium } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from './NavBarIndicatorField'

type NavBarListElementType = {
  id: string,
  text: string,
  image: string,
  isActive: boolean,
}

const NavBarListElement = ({ id, text, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { position, setPosition } = navBarDesktopPosition
  const { desktopIPosition,setIDesktopPosition } = indicatorDesktop


  // default indicator position


  // change position of indicator when clicked
  const changeIndicatorPos = (ev: React.MouseEvent) => {
    ev.preventDefault()
    const indicatorPosition = document.getElementById(`desktop_indicator_${text}`)!.getBoundingClientRect()

    const horizontalMidPosition = Number((indicatorPosition.left).toFixed(0))

    const verticalMidPosition = Number((indicatorPosition.top).toFixed(0))

    setIDesktopPosition({
      horizontalMid: horizontalMidPosition,
      verticalMid: verticalMidPosition,
    })
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
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : x))
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