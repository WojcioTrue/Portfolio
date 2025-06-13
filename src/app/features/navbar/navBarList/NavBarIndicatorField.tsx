import { useContext } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"


const NavBarIndicatorField = ({ text }: { text: string }) => {
    const { defaultIndicatorRef, skillsIndicatorRef, aboutIndicatorRef, textIndicatorRef, somethingIndicatorRef, } = useContext(NavBarContext)

    const assignRef = (arg : string) => {
        if(arg === 'default'){
            return defaultIndicatorRef
        } else if (arg === 'Skills'){
            return skillsIndicatorRef
        } else if (arg === 'About'){
            return aboutIndicatorRef
        } else if (arg === 'Text'){
            return textIndicatorRef
        } else if (arg === 'Something'){
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