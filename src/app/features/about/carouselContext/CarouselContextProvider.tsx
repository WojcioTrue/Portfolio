import { createContext, Dispatch, SetStateAction, useState, useRef } from "react";
import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider";
import { slideArray, SlideArrayType } from "./slidesArray";

export const CarouselContext = createContext<{
    carouseElementsArr: {
        array: SlideArrayType
        setArray: Dispatch<SetStateAction<SlideArrayType>>
    }
    carouselSlideDisplayRef: React.RefObject<HTMLUListElement> | undefined,
    firstActive: {
        isFirstActive: boolean
        setIsFirstActive: Dispatch<SetStateAction<boolean>>
    }
    lastActive: {
        isLastActive: boolean
        setIsLastActive: Dispatch<SetStateAction<boolean>>
    }
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
                opacity: 0,
                active: false
            }]
        },
        setArray: () => { }
    },
    carouselSlideDisplayRef: undefined,
    firstActive: {
        isFirstActive: true,
        setIsFirstActive: () => { }
    },
    lastActive: {
        isLastActive: true,
        setIsLastActive: () => { }
    }
})


const CarouselContextProvider = ({ children }: ChildrenType) => {
    const [array, setArray] = useState<SlideArrayType>(slideArray)
    const carouselSlideDisplayRef = useRef<HTMLUListElement | null>(null)
    const [isFirstActive, setIsFirstActive] = useState<boolean>(true)
    const [isLastActive, setIsLastActive] = useState<boolean>(true)

    return (
        <CarouselContext.Provider value={{
            carouseElementsArr: {
                array,
                setArray,
            },
            carouselSlideDisplayRef,
            firstActive: {
                isFirstActive,
                setIsFirstActive,
            },
            lastActive: {
                isLastActive,
                setIsLastActive,
            }
        }}>
            {children}
        </CarouselContext.Provider >
    )
}

export { CarouselContextProvider }