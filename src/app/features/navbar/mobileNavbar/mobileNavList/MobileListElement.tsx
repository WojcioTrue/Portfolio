import Image from 'next/image'
import { NavBarContext } from "../../navBarContext/NavBarContextProvider"
import { useContext } from 'react'
import { categories } from '../../navItems'
import { mabryProRegular } from "@/app/assets/fonts/mabry_pro/MabryPro"
import { NavBarListElementType } from '../../navBarTypes'

const MobileListElement = ({ text, id, isActive }: NavBarListElementType) => {
  const { navBarItems } = useContext(NavBarContext)

  return (
    <li onClick={
      (event: React.MouseEvent) => {
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : x))
      }
    } id={id} className={`mobile-nav-bar-element px-2 py-2 pl-3 ${mabryProRegular.className}`}>
      <a className={`flex items-center justify-start ${isActive ? `text-my-purple` : `text-my-black`}`}>
        {text}
        {/* <Image
          priority={true}
          src={image}
          alt="Logo"
          width="20"
          height="20"
          className='ml-2'
        /> */}
      </a>
    </li>
  )
}

export default MobileListElement