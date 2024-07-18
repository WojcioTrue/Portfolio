type ListElement = {
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
        active: false
    },
    {
        section: 'text',
        active: true
    },
    {
        section: 'something',
        active: false
    }
]