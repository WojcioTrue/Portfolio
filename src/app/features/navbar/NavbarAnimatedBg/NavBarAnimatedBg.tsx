import { useContext, useEffect, useState } from "react"
import { NavBarContext } from "./../navBarContext/NavBarContextProvider"
import NavBarAnimatedStyles from "./NavBarAnimatedBg.module.scss"

const NavBarAnimatedBg = () => {
    const { navBarDesktopPosition } = useContext(NavBarContext)
    const { position } = navBarDesktopPosition
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        const innerWidth = window.innerWidth
        if(innerWidth > 767){
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    },[])

    return (
        <div className={`static h-full w-full left-0 overflow-hidden`}>
            <span
                className={`bg-white rounded-br-xl w-[200%] h-[calc(100%_-_5px)] absolute 
                    ${NavBarAnimatedStyles.right_animation}
                    ${NavBarAnimatedStyles.top_animation_on}
                `}
                style={{ right: `${isMobile ? position.right : -20}px` }}>
            </span>
            <span
                className={`bg-white md:rounded-bl-xl w-[200%] h-[calc(100%_-_5px)] absolute 
                ${NavBarAnimatedStyles.left_animation}
                ${NavBarAnimatedStyles.top_animation_on}
                `}
                style={{ left: `${isMobile ? position.left : -20}px` }}>
            </span>
        </div>
    )
}

export default NavBarAnimatedBg