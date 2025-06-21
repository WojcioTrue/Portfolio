import { useContext, useMemo } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"

const useLiRef = () => {
    const { defaultLiRef, skillsLiRef, aboutLiRef, textLiRef, somethingLiRef, navBarItems } = useContext(NavBarContext)
    const { listElements } = navBarItems

    const getReference = useMemo(() => {
        const getRef = (arg: string) => {
            if (arg === 'Skills') {
                return skillsLiRef
            } else if (arg === 'About') {
                return aboutLiRef
            } else if (arg === 'Text') {
                return textLiRef
            } else if (arg === 'Something') {
                return somethingLiRef
            }
        }
        const getActiveSection = listElements.filter(x => x.active === true)
        if (getActiveSection.length > 0) {
            return getRef(getActiveSection[0].section)
        } else {
            return defaultLiRef
        }
    }, [aboutLiRef, defaultLiRef, listElements, skillsLiRef, somethingLiRef, textLiRef])


    return getReference
}

export default useLiRef