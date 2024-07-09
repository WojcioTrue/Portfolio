import Image from 'next/image'
import { NavBarContext } from './NavBar'
import { useContext } from 'react'

type NavBarListElementType = {
  text: string,
  image: string
}

const NavBarListElement = ({ text, image }: NavBarListElementType) => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { position, setPosition } = navBarItemPosition

  return (
    <li onClick={(e) => {
      const centerOfElement = Number((e.currentTarget.offsetWidth / 2).toFixed(0));

      const leftValue = Number((e.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + centerOfElement;
      const rightValue = (document.body.clientWidth - Number((e.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)))

      console.log(`
        innerWidth ${document.body.clientWidth} 
        element right: ${Number((e.target as HTMLLIElement).getBoundingClientRect().right.toFixed(0))}
        element : ${e.currentTarget}
        `)

      setPosition({
        left: leftValue,
        right: rightValue,
      })
    }

    }
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