import { useContext } from "react"
import { CarouselContext, SlideArrayType } from "../../carouselContext/CarouselContextProvider"

const useCarouselRightClick = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { setArray } = carouseElementsArr

    const rightClickEffect = (array: SlideArrayType[]) =>
        array.map((el) => {
            if (el.x <= 0) {
                return {
                    ...el,
                    x: el.x - 250,
                    visible: false,
                }
            } else {
                return {
                    ...el,
                    x: el.x - 250
                }
            }
        })

    const modifyArrRight = () => {
        setArray(prev => rightClickEffect(prev))
    }
    return modifyArrRight
}


export default useCarouselRightClick