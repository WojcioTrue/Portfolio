import { useContext, useEffect, useState } from "react"
import { NavBarContext } from "../NavBar"
import NavBarAnimatedStyles from "./NavBarAnimatedBg.module.scss"

const NavBarAnimatedBg = () => {
    const { navBarItemPosition, navBarItems } = useContext(NavBarContext)
    const { position } = navBarItemPosition
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        console.log(NavBarAnimatedStyles)
    }, [])

    useEffect(() => {
        const isActive = navBarItems.listElements.some((x) => Boolean(x.active) === true)
        setIsActive(isActive)
    }, [navBarItems.listElements])
    // 
    return (
        <div className={"static transition-all nav-bar-animated-bg h-full w-full left-0 overflow-hidden"}>
            <span
                className={`right-element bg-cyan-300 w-[200%] h-full absolute  
                    ${isActive ? NavBarAnimatedStyles.animation : NavBarAnimatedStyles.click}`}
                style={{ right: `${position.right - 1}px` }}>
            </span>
            <span
                className={` left-element bg-red-600 w-[200%] h-full absolute 
                    ${isActive ? NavBarAnimatedStyles.animation : NavBarAnimatedStyles.click}`}
                style={{ left: `${position.left}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg