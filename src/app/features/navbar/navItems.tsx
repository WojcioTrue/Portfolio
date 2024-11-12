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
        active: true
    },
    {
        section: 'Text',
        active: false
    },
    {
        section: 'Something',
        active: false
    }
]