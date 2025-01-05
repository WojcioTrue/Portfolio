import React from 'react'
import IconTemplate from './IconTemplate'
IconTemplate





const IconsWrapper = () => {
    const arrOfIcons = [
        {
            id: 0,
            name: 'css',
            left: 3,
            top: 3,
        },
        {
            id: 1,
            name: 'eslint',
            left: 15,
            top: 72,
        },
        {
            id: 2,
            name: 'html',
            left: 23,
            top: 8,
        },
        {
            id: 3,
            name: 'js',
            left: 12,
            top: 25,
        },
        {
            id: 4,
            name: 'next',
            left: 80,
            top: 87,
        },
        {
            id: 5,
            name: 'prettier',
            left: 80,
            top: 5,
        },
        {
            id: 6,
            name: 'react',
            left: 68,
            top: 72,
        },
        {
            id: 7,
            name: 'redux',
            left: 90,
            top: 18,
        },
        {
            id: 8,
            name: 'sass',
            left: 5,
            top: 95,
        },
        {
            id: 9,
            name: 'ts',
            left: 90,
            top: 68,
        }
    ]
    return (
        <>
            {arrOfIcons.map(x => <IconTemplate key={x.id} name={x.name} left={x.left} top={x.top} />)}
        </>
    )
}

export default IconsWrapper