import { useContext, useMemo } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"

const useIndicatorRef = () => {
    const { defaultIndicatorRef, skillsIndicatorRef, aboutIndicatorRef, textIndicatorRef, somethingIndicatorRef, navBarItems } = useContext(NavBarContext)
    const { listElements } = navBarItems

    const getReference = useMemo(() => {
        const getRef = (arg: string) => {
            if (arg === 'Skills') {
                return skillsIndicatorRef
            } else if (arg === 'About') {
                return aboutIndicatorRef
            } else if (arg === 'Text') {
                return textIndicatorRef
            } else if (arg === 'Something') {
                return somethingIndicatorRef
            }
        }
        const getActiveSection = listElements.filter(x => x.active === true)
        if (getActiveSection.length > 0) {
            return getRef(getActiveSection[0].section)
        } else {
            return defaultIndicatorRef
        }
    }, [aboutIndicatorRef, defaultIndicatorRef, listElements, skillsIndicatorRef, somethingIndicatorRef, textIndicatorRef])


    return getReference
}


export default useIndicatorRef