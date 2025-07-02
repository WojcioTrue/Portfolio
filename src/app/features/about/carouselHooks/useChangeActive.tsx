import { useContext } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"
import { SlideArrayType } from "../carouselContext/slidesArray"


const useChangeActive = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { setArray } = carouseElementsArr

    const changeActive = (x: SlideArrayType[]) =>
        x.map((el) => {
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

    const changeActiveClick = () => {
        setArray(prev => changeActive(prev))
    }

    return changeActiveClick
}

export default useChangeActive