export type ListElement = {
    section: string,
    active: boolean
}

export const categories: ListElement[] = [
    {
        section: 'Welcome',
        active: false
    },
    {
        section: 'About',
        active: false
    },
    {
        section: 'Text',
        active: true
    },
    {
        section: 'Something',
        active: false
    }
]