import { useContext, useEffect } from "react"
import { NavBarContext } from "../NavBar"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition, navBarItems } = useContext(NavBarContext)
    const { position } = navBarItemPosition
    // const isActive = navBarItems.some(categories.some(x => x.section === true ? {...x, active: true} : x)

    useEffect(() => {
        const isActive = navBarItems.listElements.some((x) => Boolean(x.active) === true)
        console.log(isActive)
    },[navBarItems.listElements])

    return (
        <div className="nav-bar-animated-bg absolute h-full w-full top-[0%] left-0 overflow-hidden z-10">
            <span 
            className={`transition-all duration-100 right-element bg-cyan-300 w-[200%] h-full absolute top-0 active:text-white`} 
            style={{ right: `${position.right}px` }}>
            </span>
            <span
            className={`transition-all duration-100 left-element bg-red-600 w-[200%] h-full absolute top-0`}
            style={{ left: `${position.left}px` }}>
            </span>
        </div>

    )
}

export default NavBarAnimatedBg