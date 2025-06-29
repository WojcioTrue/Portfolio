import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider";

export type SlideArrayType = {
    text: string,
    x: number,
    visible: boolean,
    active: boolean
}

const slideArray: SlideArrayType[] = [
    {
        text: 'first',
        x: 0,
        visible: true,
        active: true,
    },
    {
        text: 'second',
        x: 250,
        visible: true,
        active: false,

    },
    {
        text: 'third',
        x: 500,
        visible: true,
        active: false,
    }
]

const CarouselContext = createContext<{
    carouseElementsArr: {
        array: SlideArrayType[]
        setArray: Dispatch<SetStateAction<SlideArrayType[]>>
    }
}>({
    carouseElementsArr: {
        array: [],
        setArray: () => { }
    }
})


const CarouselContextProvider = ({ children }: ChildrenType) => {
    const [array, setArray] = useState<SlideArrayType[]>(slideArray)

    return (
        <CarouselContext.Provider value={
            {
                carouseElementsArr: {
                    array,
                    setArray,
                }
            }
        }> {children}
        </CarouselContext.Provider >
    )
}