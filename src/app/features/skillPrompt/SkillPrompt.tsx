import React, { useContext } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'


const SkillPrompt = () => {
    const { promptPosition } = useContext(SkillPromptContext)
    const { position } = promptPosition

    return (
        <div className={
            `fixed z-50 w-[250px] h-[120px] bg-gray-500 rounded-[7px]
        `}
            style={{
                top: position.top,
                left: position.left
            }}
        >
            <button
            onClick={() => console.log('banger')}
            className='bg-slate-400 w-[50px] h-[50px]'>X</button>
        </div>
    )
}

export default SkillPrompt