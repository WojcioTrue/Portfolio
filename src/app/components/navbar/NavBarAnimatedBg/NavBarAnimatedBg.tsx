import { useContext, useEffect } from "react"
import { NavBarContext } from "../NavBar"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition } = useContext(NavBarContext)
    const { position } = navBarItemPosition

    return (
        <div className="absolute top-0 left-0">
            {/* <div 
            className={`right-element bg-cyan-300 w-[400px] h-7 absolute top-0`} 
            style={{ right: `${position.right}px` }}>
            </div> */}
            <div
            className={`left-element bg-red-600 w-[400px] h-7 absolute top-0`}
            style={{ left: `${position.left}px` }}>
            </div>
        </div>

    )
}

export default NavBarAnimatedBg