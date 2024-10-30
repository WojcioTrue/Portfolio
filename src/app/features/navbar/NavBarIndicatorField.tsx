import { useContext, useEffect } from "react"
import { NavBarContext } from "./NavBar"

type NavBarIndicatorField = {
    text: string
}

const NavBarIndicatorField = ({ text }: NavBarIndicatorField) => {
    const { navBarItems, indicatorDesktop } = useContext(NavBarContext)
    const { desktopIPosition ,setIDesktopPosition } = indicatorDesktop
    // default indicator position



    return (
        <span id={`desktop_indicator_${text}`} className='relative h-[30px] w-[30px]'>
        </span>
    )
}

export default NavBarIndicatorField