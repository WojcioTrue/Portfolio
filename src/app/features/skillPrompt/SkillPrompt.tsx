import React, { useContext, useEffect, useState } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'



const SkillPrompt = () => {
    const {promptPosition} = useContext(SkillPromptContext)
    const [coords, setCoords] = useState<{ top: number, left: number }>({ top: 0, left: 0 })

    useEffect(() => {
        console.log(promptPosition.position)
    },[])

    useEffect(() => {
        const element = document.getElementById('drag-target')?.getBoundingClientRect()
        const newCoords = {
            top: element!.top,
            left: element!.left
        }
        if (element !== null) {
            setCoords(newCoords)
        }
    }, [])

    return (
        <div className={
            `fixed z-50 w-[250px] h-[120px] bg-gray-500 bg-opacity-50 rounded-[7px]
        `}
            style={{
                top: coords.top,
                left: coords.left
            }}
        >SkillPrompt</div>
    )
}

export default SkillPrompt