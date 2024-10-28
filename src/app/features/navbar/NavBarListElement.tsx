import Image from 'next/image'
import { NavBarContext } from './NavBar'
import { useContext, useEffect } from 'react'
import { categories } from './navItems'
import { mabryProMedium } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from './NavBarIndicatorField'

type NavBarListElementType = {
  id: string,
  text: string,
  image: string,
  isActive: boolean,
}

const NavBarListElement = ({ id, text, image, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
  const { position,setPosition } = navBarDesktopPosition
  const { setIDesktopPosition } = indicatorDesktop


    const changeIndicatorPos = (ev: React.MouseEvent) => {
      const activeIndicator = navBarItems.listElements.filter(x => x.active === true)
      if (activeIndicator.length === 1 ) {
          const indicatorPosition = document.getElementById(`desktop_indicator_${activeIndicator[0].section}`)!.getBoundingClientRect()

          const horizontalMidPosition = Number((indicatorPosition.left + indicatorPosition.width / 2).toFixed(0))

          const verticalMidPosition = Number((indicatorPosition.top + indicatorPosition.height / 2).toFixed(0))

          setIDesktopPosition({
              horizontalMid: horizontalMidPosition,
              verticalMid: verticalMidPosition,
          })
      }
    }

  const changeCenter = (ev: React.MouseEvent) => {
    ev.preventDefault();
    // center of current target element
    const elementWidth = Math.round(Number(((ev.currentTarget as HTMLLIElement).offsetWidth)));
    // offset left element with 'left' property
    const leftValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;
    // offset element with 'right' property
    const rightValue = (document.body.clientWidth - (Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))

    const newPosition = {...position, left: leftValue, right: rightValue}

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
      <a className={`flex items-center w-max gap-2 ${isActive ? "text-my-purple" : "text-my-black"}`}>
        {/* <Image
          priority={true}
          src={image}
          alt="Logo"
          width="20"
          height="20"
          className='mr-1'
          style={{filter: isActive ? "invert(25%) sepia(95%) saturate(7107%) hue-rotate(264deg) brightness(95%) contrast(103%)" : ""}}
        /> */}
        <NavBarIndicatorField text={text}/>
        {text}
      </a>
    </li>
  )
}

export default NavBarListElement