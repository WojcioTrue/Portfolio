import React, { useContext, useState } from 'react'
import ImgSkill from './ImgSkill'
import SkillText from './SkillText'
import { SkillPromptContext } from './SkillPromptContextProvider'

const InitialPrompt = () => {
    const { promptPosition, promptDisplay } = useContext(SkillPromptContext)

    const [skillProperties, setSkillProperties] = useState({
        coords: {
            x: 0,
            y: 0,
        },
        dimensions: {
            width: 0,
            height: 0,
        }
    })
    const { display } = promptDisplay

    return (
        display &&
        <div className="
        relative
        rounded-[7px]
        overflow-hidden
        bg-gray-400
        bg-opacity-30
        w-[90%] sx:w-[350px]"
        >
            <ImgSkill />
            <SkillText />
            <SkillText />
            <SkillText />

        </div>
    )
}

export default InitialPrompt