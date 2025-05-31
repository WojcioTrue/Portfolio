import { useContext } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"


const NavBarIndicatorField = ({ text }: { text: string }) => {
    const { defaultRef, navBarItems } = useContext(NavBarContext)
    const { active } = navBarItems
    
    const refCheck = () => {
        if(text == 'default'){
            return defaultRef
        }
    }

    return (
        <span ref={refCheck()} id={`desktop_indicator_${text}`} className='relative h-[30px] w-[30px] hidden md:block'>
        </span>
    )
}

export default NavBarIndicatorField