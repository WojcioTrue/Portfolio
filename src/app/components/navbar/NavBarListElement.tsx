import Image from 'next/image'
import { NavBarContext } from './NavBar'
import { useContext, useEffect } from 'react'

type NavBarListElementType = {
    text: string,
    image: string
}

const NavBarListElement = ({text, image} : NavBarListElementType) => {
  const {navBarItemPosition} = useContext(NavBarContext)
  const {position, setPosition} = navBarItemPosition

  return (
    //.textContent for target
    <li onClick={(e) => setPosition({
      left: Number((e.target as HTMLLIElement).getBoundingClientRect().left.toFixed(0)),
      right: Number((e.target as HTMLLIElement).getBoundingClientRect().right.toFixed(0)),
    })} 
    className="px-2 mx-2 text-md font-semibold cursor-pointer">
        <a className="flex items-center w-max">
          <Image
            priority={true}
            src={image}
            alt="Logo"
            width="20"
            height="20"
            className='mr-1'
          />
          {text}
        </a>
      </li>
  )
}

export default NavBarListElement