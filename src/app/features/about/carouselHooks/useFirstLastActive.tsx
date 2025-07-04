import { useContext, useEffect, useState } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"

const useFirstLastActive = () => {
    const { carouseElementsArr, firstActive, lastActive } = useContext(CarouselContext)
    const { array } = carouseElementsArr
    const { isFirstActive, setIsFirstActive} = firstActive
    const {isLastActive, setIsLastActive} = lastActive

    useEffect(() => {
        if(array.elements.length === 0){
            console.error('empty array to map Slide compoent')
            return;
        }
        const lastActive = array.elements[array.elements.length - 1].active === true ? true : false
        const firstActive = array.elements[0].active === true ? true : false
        setIsLastActive(lastActive)
        setIsFirstActive(firstActive)
    }, [array, setIsFirstActive, setIsLastActive])

    return {
        firstActive,
        lastActive
    }
}

export default useFirstLastActive