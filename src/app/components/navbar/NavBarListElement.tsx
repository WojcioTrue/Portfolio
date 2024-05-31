import Image from 'next/image'
import React from 'react'

type NavBarListElementType = {
    text: string,
    image: string
}

const NavBarListElement = ({text, image} : NavBarListElementType) => {
  return (
    <li className="px-1">
        <a className="flex items-center">
          <Image
            priority={true}
            src={image}
            alt="Logo"
            width="20"
            height="20"
            className="bg-slate m-auto mr-2"
          />
          {text}
        </a>
      </li>
  )
}

export default NavBarListElement