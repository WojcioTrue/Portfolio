import { createContext, Dispatch, SetStateAction, useState } from "react";

export type SlideArrayType = {
    text: string,
    x: number,
    visible: boolean,
    active: boolean
}

const CarouselContext = createContext<{
    arrOfElements: {
        array: SlideArrayType[]
        setArray: Dispatch<SetStateAction<SlideArrayType[]>>
    }
}>({
    arrOfElements: {
        array: [],
        setArray: () => { }
    }
})


const CarouselContextProvider = () => {
    const [array, setArray] = useState<SlideArrayType | []>([])
}