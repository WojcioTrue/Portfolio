import { useContext, useEffect } from "react"
import { SetStateAction, Dispatch } from "react"
import { IndicatorDesktopType } from "../navBarTypes"
import { ListElement } from "../navBarTypes"
import useGetIndicatorPosition from "./useGetIndicatorPosition"
import { NavBarContext } from "../navBarContext/NavBarContextProvider"

type TypeUseDefaultIndicator = {
    active: boolean,
    setIDesktopPosition: Dispatch<SetStateAction<IndicatorDesktopType>>,
    listElements: ListElement[]
}


// indicator position when page is loaded 
const useDefaultIndicator = ({ active, setIDesktopPosition, listElements }: TypeUseDefaultIndicator) => {
    const { defaultIndicatorRef, skillsIndicatorRef, aboutIndicatorRef, textIndicatorRef, somethingIndicatorRef } = useContext(NavBarContext)


    const assignRef = (arg: string) => {
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

    const horizontalMidPosition = (section: HTMLDivElement | HTMLLIElement | null | undefined) => {

        const horizontalMidPosition = () => {
            const indicatorPosition = section?.getBoundingClientRect()
            return Number((indicatorPosition!.left).toFixed(0))

        }
        return {
            horizontalMid: horizontalMidPosition(),
            verticalMid: 25,
        }
    }

    useEffect(() => {
        if (!active) {
            const defaultSection = horizontalMidPosition(defaultIndicatorRef?.current)
            setIDesktopPosition(defaultSection)
        }
        else {
            const getActiveSection = listElements.filter(x => x.active === true)
            const activeRef = assignRef(getActiveSection[0].section)
            const activeLi = horizontalMidPosition(activeRef?.current)
            setIDesktopPosition(activeLi)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, setIDesktopPosition, listElements])

}

export default useDefaultIndicator