import { useContext, useEffect, useState } from "react"
import { CarouselContext } from "../../carouselContext/CarouselContextProvider"
import { SlideArrayType } from "../../carouselContext/slidesArray"
// import { SlideArrayType } from "../../carouselContext/slidesArray"

const useCarouselRightClick = () => {
    const { carouseElementsArr } = useContext(CarouselContext)
    const { array, setArray } = carouseElementsArr
    const [enableButton, setEnableButton] = useState<boolean>(false)

    // move to button component
    useEffect(() => {
        if (array.width !== 0) {
            setEnableButton(true)
            console.log(array)
        } else {
            console.log(array)
        }
    }, [array])

    const rightClickEffect = (arg : SlideArrayType) => {
            const modifiedX = arg.elements.map((el) => {
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

    const modifyArrRight = () => {
        setArray(prev => rightClickEffect(prev))
    }
    return modifyArrRight
}


export default useCarouselRightClick