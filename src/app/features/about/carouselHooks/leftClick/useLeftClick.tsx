import { SlideArrayType } from "../../carouselContext/CarouselContextProvider"

const useLeftClick = (arg: any) => {

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
    return leftClickEffect(arg)
}

export default useLeftClick