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
        section: 'about',
        active: true
    },
    {
        section: 'text',
        active: false
    },
    {
        section: 'something',
        active: true
    }
]