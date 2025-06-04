import { useContext, useEffect } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"


const NavBarIndicatorField = ({ text }: { text: string }) => {
    const { defaultIndicatorRef, skillsIndicatorRef, aboutIndicatorRef, textIndicatorRef, somethingIndicatorRef, } = useContext(NavBarContext)

    const assignRef = (arg : string) => {
        if(text === 'default'){
            return defaultIndicatorRef
        } else if (text === 'Skills'){
            return skillsIndicatorRef
        } else if (text === 'About'){
            return aboutIndicatorRef
        } else if (text === 'Text'){
            return textIndicatorRef
        } else if (text === 'Something'){
            return somethingIndicatorRef
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