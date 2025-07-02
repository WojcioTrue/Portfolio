export type SlideArrayType = {
    width: number,
    x: number,
    elements: {
        index: number,
        text: string,
        visible: boolean,
        active: boolean
    }[]
}

export const slideArray: SlideArrayType = {
    width: 0,
    x: 0,
    elements: [
        {
            index: 0,
            text: 'first',
            visible: true,
            active: true,
        },
        {
            index: 1,
            text: 'second',
            visible: true,
            active: false,

        },
        {
            index: 2,
            text: 'third',
            visible: true,
            active: false,
        }
    ]
}