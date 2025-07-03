import { useContext } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"
import { SlideArrayType } from "../carouselContext/slidesArray"


const useChangeActive = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { setArray } = carouseElementsArr


    const changeActive = (array: SlideArrayType) => {
        const modifiedX = array.elements.map((el) => {
            if (el.x === 0) {
                return {
                    ...el,
                    active: true,
                }
            } else {
                return {
                    ...el,
                    active: false,
                }
            }
        })
        const newArr = {
            ...array,
            elements: [
                ...modifiedX,
            ]
        }
        return newArr
    }

    const changeActiveClick = () => {
        setArray(prev => changeActive(prev))
    }

    return changeActiveClick
}

export default useChangeActive