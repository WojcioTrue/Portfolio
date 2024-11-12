import { useEffect } from "react"
import { SetStateAction, Dispatch } from "react"
import { IndicatorDesktopType } from "../NavBar"

const useDefaultIndicator = (active : boolean, setIDesktopPosition : Dispatch<SetStateAction<IndicatorDesktopType>>) => {

    useEffect(() => {
        if (!active) {
            const indicatorPosition = document.getElementById(`desktop_indicator_default`)!.getBoundingClientRect()
            const horizontalMidPosition = Number((indicatorPosition.left).toFixed(0))
            
            const verticalMidPosition = Number((indicatorPosition.top).toFixed(0))

            console.log(horizontalMidPosition, verticalMidPosition)
            setIDesktopPosition({
                horizontalMid: horizontalMidPosition,
                verticalMid: verticalMidPosition,
            })
        }
    }, [active, setIDesktopPosition])

}

export default useDefaultIndicator