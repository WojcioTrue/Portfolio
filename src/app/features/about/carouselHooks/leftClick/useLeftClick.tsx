import { useContext } from "react"
import { CarouselContext } from "../../carouselContext/CarouselContextProvider"
import { SlideArrayType } from "../../carouselContext/slidesArray"

const useLeftClick = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { array, setArray } = carouseElementsArr

    const leftClickEffect = (arg: SlideArrayType) => {
        const modifiedX = arg.elements.map((el) => {
            if (el.x >= -(array.width + 1)) {
                return {
                    ...el,
                    x: el.x + array.width,
                    visible: true,
                }
            } else {
                return {
                    ...el,
                    x: el.x + array.width
                }
            }
        })
        const newArr = {
            ...array,
            elements: [
                ...modifiedX,
            ]
        }
        console.log(newArr)
        return newArr
    }

    const leftClick = () => {
        setArray(prev => leftClickEffect(prev))
    }

    return leftClick
}

export default useLeftClick