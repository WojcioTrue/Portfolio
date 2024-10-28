import Image from 'next/image'
import { NavBarContext } from './NavBar'
import { useContext, useEffect } from 'react'
import { categories } from './navItems'
import { mabryProMedium } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicator from './NavBarIndicator'

type NavBarListElementType = {
  id: string,
  text: string,
  image: string,
  isActive: boolean,
}

const NavBarListElement = ({ id, text, image, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems } = useContext(NavBarContext)
  const { position,setPosition } = navBarDesktopPosition

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
        <NavBarIndicator isActive={isActive} text={text}/>
        {text}
      </a>
    </li>
  )
}

export default NavBarListElement