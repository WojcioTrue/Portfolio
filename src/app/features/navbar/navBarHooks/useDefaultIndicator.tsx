import { useEffect } from "react"
import { SetStateAction, Dispatch } from "react"
import { IndicatorDesktopType } from "../navBarTypes"
import { ListElement } from "../navBarTypes"

type TypeUseDefaultIndicator = {
    active: boolean,
    setIDesktopPosition: Dispatch<SetStateAction<IndicatorDesktopType>>,
    listElements: ListElement[]
}

export const getIndicatorPosition = (section: string) => {
    const indicatorPosition = document.getElementById(`desktop_indicator_${section}`)!.getBoundingClientRect()
    const horizontalMidPosition = Number((indicatorPosition.left).toFixed(0))

    const verticalMidPosition = Number((indicatorPosition.top).toFixed(0))

    return {
        horizontalMid: horizontalMidPosition,
        verticalMid: verticalMidPosition,
    }
}

const useDefaultIndicator = ({ active, setIDesktopPosition, listElements }: TypeUseDefaultIndicator) => {

    useEffect(() => {
        
        if (!active) {
            const defaultPosition = getIndicatorPosition('default')
            setIDesktopPosition(defaultPosition)
        }
        else {
            const getActiveSection = listElements.filter(x => x.active === true)
            const listElementPosition = getIndicatorPosition(`${getActiveSection[0].section}`)
            setIDesktopPosition(listElementPosition)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, setIDesktopPosition])
}

export default useDefaultIndicator