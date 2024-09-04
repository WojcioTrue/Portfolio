import { useContext, useEffect, useState } from "react"
import { NavBarContext } from "../NavBar"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition, navBarItems } = useContext(NavBarContext)
    const { position } = navBarItemPosition
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const isActive = navBarItems.listElements.some((x) => Boolean(x.active) === true)
        setIsActive(isActive)
    }, [navBarItems.listElements])

    return (
        <div className={"static transition-all nav-bar-animated-bg h-full w-full left-0 overflow-hidden"}>
            <span
                className={`transition-all duration-100 right-element bg-cyan-300 w-[200%] h-full absolute ${!isActive ? "top-[-100%]" : "top-[0%]"}`}
                style={{ right: `${position.right}px` }}>
            </span>
            <span
                className={`transition-all duration-100 left-element bg-red-600 w-[200%] h-full absolute ${!isActive ? "top-[-100%]" : "top-[0%]"}`}
                style={{ left: `${position.left}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg