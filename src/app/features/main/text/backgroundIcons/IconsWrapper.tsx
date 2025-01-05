import React from 'react'
import IconTemplate from './IconTemplate'
IconTemplate

const arrOfIcons = [
    {
        id: 0,
        name: 'css',
        left: 10,
        top: 10,
    },
    {
        id: 1,
        name: 'eslint',
        left: 10,
        top: 10,
    },
    {
        id: 2,
        name: 'html',
        left: 10,
        top: 10,
    },
    {
        id: 3,
        name: 'js',
        left: 10,
        top: 10,
    },
    {
        id: 4,
        name: 'next',
        left: 10,
        top: 10,
    },
    {
        id: 5,
        name: 'prettier',
        left: 10,
        top: 10,
    },
    {
        id: 6,
        name: 'react',
        left: 10,
        top: 10,
    },
    {
        id: 7,
        name: 'redux',
        left: 10,
        top: 10,
    },
    {
        id: 8,
        name: 'sass',
        left: 10,
        top: 10,
    },
    {
        id: 9,
        name: 'ts',
        left: 10,
        top: 10,
    }
]

const IconsWrapper = () => {
    return (
        <>
            {arrOfIcons.map(x => <IconTemplate key={x.id} name={x.name} left={x.left} top={x.top}/>)}
        </>
    )
}

export default IconsWrapper