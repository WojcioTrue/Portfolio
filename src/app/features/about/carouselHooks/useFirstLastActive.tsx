import { useContext, useEffect, useState } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"

const useFirstLastActive = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { array } = carouseElementsArr
    const [lastActive, setLastActive] = useState<boolean>(true)
    const [firstActive, setFirstActive] = useState<boolean>(true)

    useEffect(() => {
        if(array.elements.length === 0){
            console.error('empty array to map Slide compoent')
            return;
        }
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