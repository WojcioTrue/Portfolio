import React from 'react'
import IconTemplate from './IconTemplate'
import { arrOfIcons } from './IconsArray'

const IconsWrapper = () => {

    return (
        <>
            {arrOfIcons.map(x => <IconTemplate key={x.id} name={x.name} left={x.left} top={x.top} id={x.id}/>)}
        </>
    )
}

export default IconsWrapper