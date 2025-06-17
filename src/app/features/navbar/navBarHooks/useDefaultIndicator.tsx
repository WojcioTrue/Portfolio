import { useEffect } from "react"
import { SetStateAction, Dispatch } from "react"
import { IndicatorDesktopType } from "../navBarTypes"
import { ListElement } from "../navBarTypes"
import useIndicatorRef from "./useIndicatorRef"

type TypeUseDefaultIndicator = {
    active: boolean,
    setIDesktopPosition: Dispatch<SetStateAction<IndicatorDesktopType>>,
    listElements: ListElement[]
}

   export const horizontalMidPosition = (section: HTMLDivElement | HTMLSpanElement | null | undefined) => {

        const horizontalMidPosition = () => {
            const indicatorPosition = section?.getBoundingClientRect()
            return Number((indicatorPosition!.left).toFixed(0))

        }
        return {
            horizontalMid: horizontalMidPosition(),
            verticalMid: 25,
        }
    }

// indicator position when page is loaded 
const useDefaultIndicator = ({ active, setIDesktopPosition, listElements }: TypeUseDefaultIndicator) => {
    const refObj = useIndicatorRef()

    useEffect(() => {
        if (!active) {
            const defaultSection = horizontalMidPosition(refObj?.current)
            setIDesktopPosition(defaultSection)
        }
        else {
            const activeLi = horizontalMidPosition(refObj?.current)
            setIDesktopPosition(activeLi)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, setIDesktopPosition, listElements])

}

export default useDefaultIndicator