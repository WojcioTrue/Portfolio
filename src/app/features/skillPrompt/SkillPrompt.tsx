import React, { useContext, useEffect, useState } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'


const SkillPrompt = () => {
    const { promptPosition } = useContext(SkillPromptContext)
    const { position } = promptPosition

    return (
        <div className={
            `fixed z-50 w-[250px] h-[120px] bg-gray-500 bg-opacity-50 rounded-[7px]
        `}
            style={{
                top: position.top,
                left: position.left
            }}
        >SkillPrompt</div>
    )
}

export default SkillPrompt