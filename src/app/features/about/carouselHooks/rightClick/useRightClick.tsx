import { useContext } from "react"
import { CarouselContext } from "../../carouselContext/CarouselContextProvider"
import { SlideArrayType } from "../../carouselContext/slidesArray"

const useCarouselRightClick = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { setArray } = carouseElementsArr

    const rightClickEffect = (array: SlideArrayType[]) =>
        array.map((el) => {
            if (el.x <= 0) {
                return {
                    ...el,
                    x: el.x - 200,
                    visible: false,
                }
            } else {
                return {
                    ...el,
                    x: el.x - 200
                }
            }
        })

    const modifyArrRight = () => {
        setArray(prev => rightClickEffect(prev))
    }
    return modifyArrRight
}


export default useCarouselRightClick