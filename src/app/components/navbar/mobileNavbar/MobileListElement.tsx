import Image from 'next/image'

type NavBarListElementType = {
    text: string,
    image: string
}

const MobileListElement  = ({text, image} : NavBarListElementType) => {
    return (
      <li className="px-1">
          <a className="flex items-center">
            <Image
              priority={true}
              src={image}
              alt="Logo"
              width="40"
              height="40"
            />
            {text}
          </a>
        </li>
    )
  }

export default MobileListElement