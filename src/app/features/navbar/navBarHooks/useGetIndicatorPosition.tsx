import { useContext } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"


const useGetIndicatorPosition = (section: string) => {
    const { defaultIndicatorRef, skillsIndicatorRef, aboutIndicatorRef, textIndicatorRef, somethingIndicatorRef, } = useContext(NavBarContext)

    const assignRef = (arg: string) => {
        if (arg === 'default') {
            return defaultIndicatorRef
        } else if (arg === 'Skills') {
            return skillsIndicatorRef
        } else if (arg === 'About') {
            return aboutIndicatorRef
        } else if (arg === 'Text') {
            return textIndicatorRef
        } else if (arg === 'Something') {
            return somethingIndicatorRef
        }
    }

    const horizontalMidPosition = () => {
        const indicatorPosition = assignRef(section)?.current?.getBoundingClientRect()
        
        if (indicatorPosition !== undefined) {
            return Number((indicatorPosition.left).toFixed(0))
        }
    }
    return {
        horizontalMid: horizontalMidPosition(),
        verticalMid: 25,
    }
}

export default useGetIndicatorPosition