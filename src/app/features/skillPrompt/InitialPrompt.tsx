import React, { useContext, useState } from 'react'
import ImgSkill from './ImgSkill'
import SkillText from './SkillText'
import { SkillPromptContext } from './SkillPromptContextProvider'

//This component will be used to get initial height and position for prompt, also use values like height and position when window will be resized. For now (18.04.2025) i can't animate height from stiff value to auto, so i will create this dummy component to get all values and push to final Prompt compoent

const InitialPrompt = () => {
    const { promptPosition } = useContext(SkillPromptContext)

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

    return (
        <div className="
        relative
        rounded-[7px]
        overflow-hidden
        bg-gray-400
        bg-opacity-30
        w-[90%] sx:w-[350px]"
        >
            <ImgSkill />
            <SkillText initAnimation={false}/>
            <SkillText initAnimation={false}/>
            <SkillText initAnimation={false}/>

        </div>
    )
}

export default InitialPrompt