import { useContext } from "react"
import { NavBarContext } from "./../navBarContext/NavBarContextProvider"
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
                style={{ right: `${window.innerWidth > 767 ? position.right : -20}px` }}>
            </span>
            <span
                className={`bg-white opacity-85  md:rounded-bl-xl w-[200%] h-[calc(100%_-_5px)] absolute 
                ${NavBarAnimatedStyles.left_animation}
                ${NavBarAnimatedStyles.top_animation_on}
                `}
                style={{ left: `${window.innerWidth > 767 ? position.left : -20}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg