import { useContext, useEffect } from "react"
import { NavBarContext } from "../NavBar"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition } = useContext(NavBarContext)
    const { position } = navBarItemPosition

    return (
        <div className="nav-bar-animated-bg absolute h-full w-full top-0 left-0 overflow-hidden z-10">
            <span 
            className={`transition-all duration-75 right-element bg-cyan-300 w-full h-full absolute top-0 active:text-white`} 
            style={{ right: `${position.right}px` }}>
            </span>
            <span
            className={`transition-all duration-75 left-element bg-red-600 w-full h-full absolute top-0`}
            style={{ left: `${position.left}px` }}>
            </span>
        </div>

    )
}

export default NavBarAnimatedBg