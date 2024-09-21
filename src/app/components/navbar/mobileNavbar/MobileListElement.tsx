import Image from 'next/image'
import { NavBarContext } from '../NavBar'
import { useContext } from 'react'
import { categories } from '../navItems'

type NavBarListElementType = {
  text: string,
  image: string,
  id: string,
  isActive: boolean
}



const MobileListElement = ({ text, image, id, isActive }: NavBarListElementType) => {
  const { navBarItemPosition, navBarItems } = useContext(NavBarContext)
  const { setPosition } = navBarItemPosition

  const changeCenter = (ev: React.MouseEvent) => {
    ev.preventDefault();
    // center of current target element
    const elementWidth = Math.round(Number(((ev.currentTarget as HTMLLIElement).offsetWidth)));
    // offset left element with 'left' property
    const leftValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;
    // offset element with 'right' property
    const rightValue = (document.body.clientWidth - (Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))

    setPosition({
      left: leftValue,
      right: rightValue,
    })
  }

  return (
    <li onClick={
      (event: React.MouseEvent) => {
        console.log('x')
        changeCenter(event);
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : x))
      }
    } id={id} className={`mobile-nav-bar-element px-2 py-2 border-t last:border-b ${isActive ? 'bg-red-400' : ''}`}>
      <a className="flex items-center justify-start">

        {text.toUpperCase()}
        <Image
          priority={true}
          src={image}
          alt="Logo"
          width="20"
          height="20"
          className='ml-2'
        />
      </a>
    </li>
  )
}

export default MobileListElement