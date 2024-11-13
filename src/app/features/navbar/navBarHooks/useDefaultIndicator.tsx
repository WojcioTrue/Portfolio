import { useEffect } from "react"
import { SetStateAction, Dispatch } from "react"
import { IndicatorDesktopType } from "../NavBar"
import { ListElement } from "../navItems"

type TypeUseDefaultIndicator = {
    active: boolean,
    setIDesktopPosition: Dispatch<SetStateAction<IndicatorDesktopType>>,
    listElements: ListElement[]
}

const useDefaultIndicator = ({active, setIDesktopPosition, listElements} : TypeUseDefaultIndicator) => {

    useEffect(() => {
        const changeIndicatorPosition = (section: string) => {
            const indicatorPosition = document.getElementById(`desktop_indicator_${section}`)!.getBoundingClientRect()
            const horizontalMidPosition = Number((indicatorPosition.left).toFixed(0))

            const verticalMidPosition = Number((indicatorPosition.top).toFixed(0))

            setIDesktopPosition({
                horizontalMid: horizontalMidPosition,
                verticalMid: verticalMidPosition,
            })
        }
        if (!active) {
            changeIndicatorPosition('default')
        }
        else {
            const getActiveSection = listElements.filter(x => x.active === true)
            changeIndicatorPosition(`${getActiveSection[0].section}`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, setIDesktopPosition])
}

export default useDefaultIndicator