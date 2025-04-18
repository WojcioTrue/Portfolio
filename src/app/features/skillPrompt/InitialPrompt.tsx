import React, { useContext, useState } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import Image from "next/image"
//This component will be used to get initial height and position for prompt, also use values like height and position when window will be resized. For now (18.04.2025) i can't animate height from stiff value to auto, so i will create this dummy component to get all values and push to final Prompt compoent

const InitialPrompt = () => {
    const { promptPosition } = useContext(SkillPromptContext)
    const { promptSkill } = useContext(SkillPromptContext)
    const { skill } = promptSkill
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
            <div className="relative bg-red-500 w-[100%] h-[150px]">
                <div className="bg-blue-500 absolute">
                    <Image
                        src={skill.src}
                        alt="#"
                        fill
                    />
                </div>
            </div >
            <div
                id="skill-text"
                className="py-[30px] text-white mx-6">
                <p className="text-4xl">{skill.name}</p>
                <div className="w-full bg-my-lightBackground my-3 h-[1px]"></div>
                <p>{skill.text}</p>
            </div>
        </div>
    )
}

export default InitialPrompt