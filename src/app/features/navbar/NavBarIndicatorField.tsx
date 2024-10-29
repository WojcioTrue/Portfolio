type NavBarIndicatorField = {
    text: string
}

const NavBarIndicatorField = ({ text }: NavBarIndicatorField) => {

    return (
        <span id={`desktop_indicator_${text}`} className='relative h-[30px] w-[30px]'>
        </span>
    )
}

export default NavBarIndicatorField