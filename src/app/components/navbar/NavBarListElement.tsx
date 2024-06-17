import Image from 'next/image'

type NavBarListElementType = {
    text: string,
    image: string
}

const NavBarListElement = ({text, image} : NavBarListElementType) => {
  return (
    <li className="px-4 text-md font-semibold">
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