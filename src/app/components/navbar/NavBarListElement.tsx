import Image from 'next/image'
import { NavBarContext } from './NavBar'
import { useContext } from 'react'
import { categories } from './navItems'

type NavBarListElementType = {
  text: string,
  image: string,
  isActive: boolean,
}

const NavBarListElement = ({ text, image, isActive }: NavBarListElementType) => {
  const { navBarItemPosition } = useContext(NavBarContext)
  const { navBarItems } = useContext(NavBarContext)
  const { position, setPosition } = navBarItemPosition

  const changeCenter = (ev: React.MouseEvent) => {
    ev.preventDefault();
    // center of current target element
    const centerOfElement = Number(((ev.currentTarget as HTMLLIElement).offsetWidth / 2).toFixed(0));
    // offset left element with 'left' property
    const leftValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + centerOfElement;
    // offset element with 'right' property
    const rightValue = (document.body.clientWidth - (Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - centerOfElement))

    setPosition({
      left: leftValue,
      right: rightValue,
    })
  }

  return (
    <li onClick={
      (event: React.MouseEvent) => {
        changeCenter(event);
        navBarItems.setListElements(categories.map(x => x.section === text ? {...x, active: true} : x))
      }
    }
      className={`desktop-nav-bar-element px-4 text-md font-semibold cursor-pointer z-20 ${isActive && "bg-red-950"}`}>
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