import { useContext } from "react"
import { CarouselContext, SlideArrayType } from "../../carouselContext/CarouselContextProvider"

const useLeftClick = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { setArray } = carouseElementsArr

    const leftClickEffect = (array: SlideArrayType[]) =>
        array.map((el) => {
            if (el.x >= -250) {
                return {
                    ...el,
                    x: el.x + 250,
                    visible: true,
                }
            } else {
                return {
                    ...el,
                    x: el.x + 250,
                    visible: false,
                }
            }
        })

    const leftClick = () => {
        setArray(prev => leftClickEffect(prev))
    }

    return leftClick
}

export default useLeftClick