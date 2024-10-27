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
                className={`bg-white rounded-br-xl w-[200%] h-full absolute 
                    ${NavBarAnimatedStyles.right_animation}
                    ${isActive ? NavBarAnimatedStyles.top_animation_on : NavBarAnimatedStyles.top_animation_off}
                `}
                style={{ right: `${position.right}px` }}>
            </span>
            <span
                className={`bg-white rounded-bl-xl w-[200%] h-full absolute ${NavBarAnimatedStyles.left_animation}
                ${isActive ? NavBarAnimatedStyles.top_animation_on : NavBarAnimatedStyles.top_animation_off}
                `}
                style={{ left: `${position.left}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg