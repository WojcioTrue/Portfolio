export type SlideArrayType = {
    index: number,
    text: string,
    x: number,
    gap: number,
    visible: boolean,
    active: boolean
}


export const slideArray: SlideArrayType[] = [
    {
        index: 0,
        text: 'first',
        x: 0,
        gap: 0,
        visible: true,
        active: true,
    },
    {
        index: 1,
        text: 'second',
        x: 0,
        gap: 0,
        visible: true,
        active: false,

    },
    {
        index: 2,
        text: 'third',
        x: 0,
        gap: 0,
        visible: true,
        active: false,
    }
]