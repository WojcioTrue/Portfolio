export type SlideArrayType = {
    width: number,
    gap: number,
    elements: {
        index: number,
        x: number,
        text: string,
        visible: boolean,
        opacity: number,
        active: boolean
    }[]
}

export const slideArray: SlideArrayType = {
    width: 0,
    gap: 0,
    elements: [
        {
            index: 0,
            x: 0,
            text: 'first',
            visible: true,
            opacity: 0,
            active: true,
        },
        {
            index: 1,
            x: 0,
            text: 'second',
            visible: true,
            opacity: 0,
            active: false,

        },
        {
            index: 2,
            x: 0,
            text: 'third',
            visible: true,
            opacity: 0,
            active: false,
        }
    ]
}