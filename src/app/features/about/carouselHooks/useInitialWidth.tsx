import { useContext, useEffect } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"


const useInitialWidth = () => {
    const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
    const { array, setArray } = carouseElementsArr

    // initial width of slide Display element
    useEffect(() => {
        const displayWidth = carouselSlideDisplayRef?.current?.getBoundingClientRect().width
        if (displayWidth !== undefined) {
            const newArr = array.elements.map((x, i) => {
                return {
                    ...x,
                    x: displayWidth * (i * 1)
                }
            })

            const modifiedArr = {
                width: displayWidth,
                gap: 20,
                elements: [
                    ...newArr
                ]
            }
            // if display is endabled, then width is updated 
            setArray(modifiedArr)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setArray, carouselSlideDisplayRef])
}

export default useInitialWidth