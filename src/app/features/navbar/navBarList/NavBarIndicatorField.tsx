import { useContext, useEffect } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"


const NavBarIndicatorField = ({ text }: { text: string }) => {
    const { defaultRef, skillsRef, aboutRef, textRef, somethingRef } = useContext(NavBarContext)

    const assignRef = (arg : string) => {
        if(text === 'default'){
            return defaultRef
        } else if (text === 'Skills'){
            return skillsRef
        } else if (text === 'About'){
            return aboutRef
        } else if (text === 'Text'){
            return textRef
        } else if (text === 'Something'){
            return somethingRef
        }
    }

    return (
        <span
            ref={assignRef(text)}
            id={`desktop_indicator_${text}`} className='relative h-[30px] w-[30px] hidden md:block'>
        </span>
    )
}

export default NavBarIndicatorField