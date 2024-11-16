import React, { useContext } from 'react'
import { NavBarContext } from "./navBarContext/NavBarContextProvider"

const NavBarButton = () => {
     const {toogleMobileNav} = useContext(NavBarContext)
     const {setDisplayMenu} = toogleMobileNav
    return (
        <button
            className="float-right md:hidden px-2 border-red-400 border-2"
            type="button"
            aria-controls="dropdown__navbar"
            aria-expanded="false"
            aria-label="Toggle navbar"
            onClick={() => setDisplayMenu(prev => !prev)}
        >X</button>
    )
}

export default NavBarButton