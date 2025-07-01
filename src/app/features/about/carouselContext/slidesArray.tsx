export type SlideArrayType = {
    text: string,
    x: number,
    gap: number,
    visible: boolean,
    active: boolean
}

export const slideArray: SlideArrayType[] = [
    {
        text: 'first',
        x: 0,
        gap: 0,
        visible: true,
        active: true,
    },
    {
        text: 'second',
        x: 0,
        gap: 0,
        visible: true,
        active: false,

    },
    {
        text: 'third',
        x: 0,
        gap: 0,
        visible: true,
        active: false,
    }
]