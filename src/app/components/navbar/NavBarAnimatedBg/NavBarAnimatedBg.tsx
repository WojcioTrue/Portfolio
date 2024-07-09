import { useContext, useEffect } from "react"
import { NavBarContext } from "../NavBar"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition } = useContext(NavBarContext)
    const { position } = navBarItemPosition

    return (
        <>
            <div
                className={`bg-cyan-300 w-[400px] h-7 absolute top-0  `}
                style={{ left: `${position.left}px` }}>
            </div>
            <div
                className={`bg-red-600 w-[400px] h-7 absolute top-0  `}
                style={{ right: `${position.right}px` }}>
            </div>
        </>

    )
}

export default NavBarAnimatedBg