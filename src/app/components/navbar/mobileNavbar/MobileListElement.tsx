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
  const { navBarItems } = useContext(NavBarContext)
  // const { position, setPosition } = navBarItemPosition

  // const changeCenter = (ev: React.MouseEvent) => {
  //   ev.preventDefault();
  //   // height of current clicked element
  //   const elementHeight = Math.round(Number(((ev.currentTarget as HTMLLIElement).offsetHeight)));
  //   // offset element with 'top' property
  //   const topValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().top.toFixed(0));
  //   // offset element with 'bottom' property
  //   const bottomValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().bottom.toFixed(0))

  //   const newPosition = {...position, top: topValue, bottom: bottomValue}

  //   setPosition(newPosition)
  // }

  return (
    <li onClick={
      (event: React.MouseEvent) => {
        navBarItems.setListElements(categories.map(x => x.section === text ? { ...x, active: true } : x))
      }
    } id={id} className={`mobile-nav-bar-element px-2 py-2 border-t last:border-b`}>
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