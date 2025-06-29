import {  SlideArrayType } from "../carouselContext/CarouselContextProvider"

const useCarouselRightClick = (arg: any) => {

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
    return rightClickEffect(arg)
}


export default useCarouselRightClick