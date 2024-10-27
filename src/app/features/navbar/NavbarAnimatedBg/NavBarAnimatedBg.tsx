import { useContext, useEffect, useState } from "react"
import { NavBarContext } from "../NavBar"
import NavBarAnimatedStyles from "./NavBarAnimatedBg.module.scss"

const NavBarAnimatedBg = () => {
    const { navBarDesktopPosition, navBarItems } = useContext(NavBarContext)
    const { position } = navBarDesktopPosition
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const isActive = navBarItems.listElements.some((x) => Boolean(x.active) === true)
        setIsActive(isActive)
    }, [navBarItems.listElements])

    return (
        <div className={`static h-full w-full left-0 overflow-hidden`}>
            <span
                className={`bg-white opacity-85 rounded-br-xl w-[200%] h-[calc(100%_-_5px)] absolute 
                    ${NavBarAnimatedStyles.right_animation}
                    ${isActive ? NavBarAnimatedStyles.top_animation_on : NavBarAnimatedStyles.top_animation_off}
                `}
                style={{ right: `${position.right}px` }}>
            </span>
            <span
                className={`bg-white opacity-85 rounded-bl-xl w-[200%] h-[calc(100%_-_5px)] absolute ${NavBarAnimatedStyles.left_animation}
                ${isActive ? NavBarAnimatedStyles.top_animation_on : NavBarAnimatedStyles.top_animation_off}
                `}
                style={{ left: `${position.left}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg