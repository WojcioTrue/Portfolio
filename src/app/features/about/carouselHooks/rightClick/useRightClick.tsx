import { useContext, useEffect, useState } from "react"
import { CarouselContext } from "../../carouselContext/CarouselContextProvider"
import { SlideArrayType } from "../../carouselContext/slidesArray"
import { error } from "console"

const useCarouselRightClick = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { array, setArray } = carouseElementsArr
    const [enableButton, setEnableButton] = useState<boolean>(false)

    // move to button component
    useEffect(() => {
        if (array.width !== 0) {
            console.log('button enabled', array.width)
            setEnableButton(true)
            console.log(array)
        }
    }, [array])

    const rightClickEffect = (array: SlideArrayType, width: number) => {
        if (enableButton) {
            const modifiedX = array.elements.map((el) => {
                if (el.x <= 0) {
                    return {
                        ...el,
                        x: el.x - array.width,
                        visible: false,
                    }
                } else {
                    return {
                        ...el,
                        x: el.x - array.width
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
    }




    const modifyArrRight = () => {
        setArray(prev => rightClickEffect(prev))
    }
    return modifyArrRight
}


export default useCarouselRightClick