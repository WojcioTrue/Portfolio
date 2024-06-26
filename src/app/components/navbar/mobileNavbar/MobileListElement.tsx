import Image from 'next/image'

type NavBarListElementType = {
  text: string,
  image: string
}

const MobileListElement = ({ text, image }: NavBarListElementType) => {
  return (
    <li className="px-2 py-2 border-t last:border-b">
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