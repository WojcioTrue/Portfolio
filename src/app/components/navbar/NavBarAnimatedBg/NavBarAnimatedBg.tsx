import { useContext, useEffect } from "react"
import { NavBarContext } from "../NavBar"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition } = useContext(NavBarContext)
    const { position } = navBarItemPosition

    return (
        <div className="nav-bar-animated-bg absolute h-[30px] w-full top-0 left-0 overflow-hidden">
            <span 
            className={`right-element bg-cyan-300 w-[400px] h-7 absolute top-0`} 
            style={{ right: `${position.right}px` }}>
            </span>
            <span
            className={`transition-all left-element bg-red-600 w-[400px] h-7 absolute top-0`}
            style={{ left: `${position.left}px` }}>
            </span>
        </div>

    )
}

export default NavBarAnimatedBg