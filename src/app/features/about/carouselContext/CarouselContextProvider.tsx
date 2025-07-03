import { createContext, Dispatch, SetStateAction, useState, useRef } from "react";
import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider";
import { slideArray, SlideArrayType } from "./slidesArray";

export const CarouselContext = createContext<{
    carouseElementsArr: {
        array: SlideArrayType
        setArray: Dispatch<SetStateAction<SlideArrayType>>
    }
    carouselSlideDisplayRef: React.RefObject<HTMLDivElement> | undefined,
}>({
    carouseElementsArr: {
        array: {
            width: 0,
            gap: 0,
            elements: [{
                index: 0,
                x: 0,
                text: '',
                visible: false,
                active: false
            }]
        },
        setArray: () => { }
    },
    carouselSlideDisplayRef: undefined,
})


const CarouselContextProvider = ({ children }: ChildrenType) => {
    const [array, setArray] = useState<SlideArrayType>(slideArray)
    const carouselSlideDisplayRef = useRef<HTMLDivElement | null>(null)

    return (
        <CarouselContext.Provider value={{
            carouseElementsArr: {
                array,
                setArray,
            },
            carouselSlideDisplayRef,
        }}>
            {children}
        </CarouselContext.Provider >
    )
}

export { CarouselContextProvider }