import React, { ReactElement } from 'react'
type SkillButtonType = {
    onClick?: () => void,
    disabled?: boolean,
    icon: ReactElement
}

const SkillButton = ({ onClick, disabled, icon }: SkillButtonType) => {
    return (

        <button onClick={onClick} disabled={disabled} className='
            block 
            bg-transparent 
            text-black
            w-full
            h-[45px]
            '>
            {icon}
        </button>
    )
}

export default SkillButton