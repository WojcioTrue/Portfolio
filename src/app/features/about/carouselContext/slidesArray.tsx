export type SlideArrayType = {
    width: number,
    gap: number,
    elements: {
        index: number,
        text: string,
        x: number,
        visible: boolean,
        active: boolean
    }[]
}


export const slideArray: SlideArrayType = {
    width: 0,
    gap: 0,
    elements: [
        {
            index: 0,
            text: 'first',
            x: 0,
            visible: true,
            active: true,
        },
        {
            index: 1,
            text: 'second',
            x: 0,
            visible: true,
            active: false,

        },
        {
            index: 2,
            text: 'third',
            x: 0,
            visible: true,
            active: false,
        }
    ]
}