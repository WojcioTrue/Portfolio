import { useContext, useEffect, useState } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"

const useFirstLastActive = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { array } = carouseElementsArr
    const [lastActive, setLastActive] = useState<boolean>(false)
    const [firstActive, setFirstActive] = useState<boolean>(true)

    useEffect(() => {
        const lastActive = array.elements[array.elements.length - 1].active === true ? true : false
        const firstActive = array.elements[0].active === true ? true : false
        setLastActive(lastActive)
        setFirstActive(firstActive)
    }, [array])

    return {
        firstActive,
        lastActive
    }
}

export default useFirstLastActive