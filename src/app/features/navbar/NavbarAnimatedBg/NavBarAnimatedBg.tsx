import { useContext } from "react"
import { NavBarContext } from "../NavBar"
import NavBarAnimatedStyles from "./NavBarAnimatedBg.module.scss"

const NavBarAnimatedBg = () => {
    const { navBarDesktopPosition } = useContext(NavBarContext)
    const { position } = navBarDesktopPosition


    return (
        <div className={`static h-full w-full left-0 overflow-hidden`}>
            <span
                className={`bg-white opacity-85 rounded-br-xl w-[200%] h-[calc(100%_-_5px)] absolute 
                    ${NavBarAnimatedStyles.right_animation}
                    ${NavBarAnimatedStyles.top_animation_on}
                `}
                style={{ right: `${position.right}px` }}>
            </span>
            <span
                className={`bg-white opacity-85  md:rounded-bl-xl w-[200%] h-[calc(100%_-_5px)] absolute 
                ${NavBarAnimatedStyles.left_animation}
                ${NavBarAnimatedStyles.top_animation_on}
                `}
                style={{ left: `${position.left}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg