import { useContext, useEffect } from "react"
import { CarouselContext } from "../carouselContext/CarouselContextProvider"


const useResponsiveWidth = () => {
    const { carouseElementsArr, carouselSlideDisplayRef } = useContext(CarouselContext)
    const { array, setArray } = carouseElementsArr

    useEffect(() => {
        const resizeEvent = () => {
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
                setArray(modifiedArr)
            }
        }
        window.addEventListener('resize', resizeEvent)
        return () => {
            window.removeEventListener('resize', resizeEvent)
        }
    }, [carouselSlideDisplayRef, array, setArray])

}

export default useResponsiveWidth