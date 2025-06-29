import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider";
import { slideArray, SlideArrayType } from "./slidesArray";

export const CarouselContext = createContext<{
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
    const [array, setArray] = useState<SlideArrayType[] | []>(slideArray)

    return (
        <CarouselContext.Provider value={
            {
                carouseElementsArr: {
                    array,
                    setArray,
                }
            }
        }> 
        {children}
        </CarouselContext.Provider >
    )
}

export { CarouselContextProvider }