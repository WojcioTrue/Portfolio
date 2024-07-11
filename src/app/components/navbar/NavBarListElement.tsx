import Image from 'next/image'
import { NavBarContext } from './NavBar'
import { useContext, useEffect } from 'react'

type NavBarListElementType = {
  text: string,
  image: string
}

const NavBarListElement = ({ text, image }: NavBarListElementType) => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position, setPosition } = navBarItemPosition



  return (
    <li onClick={(e) => {
      const centerOfElement = Number((e.currentTarget.offsetWidth/2).toFixed(0));
      // offset left element with 'left' property
      const leftValue = Number((e.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + centerOfElement;
      // offset element with 'right' property
      const rightValue = (document.body.clientWidth - (Number((e.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - centerOfElement))

      setPosition({
        left: leftValue,
        right: rightValue,
      })
    }

    }
      className="px-4 text-md font-semibold cursor-pointer">
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