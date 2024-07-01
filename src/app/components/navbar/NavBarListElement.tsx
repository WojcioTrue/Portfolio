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

  useEffect(() => {
    console.log(position)
  },[position])

  return (
    //.textContent for target
    <li onClick={(e) => setPosition({
      left: Number((e.target as HTMLLIElement).getBoundingClientRect().left.toFixed(1)),
      right: Number((e.target as HTMLLIElement).getBoundingClientRect().right.toFixed(1)),
    })} 
    className="px-4 text-md font-semibold">
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