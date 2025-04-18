import React, { useContext, useEffect, useState, useRef, useLayoutEffect } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import Image from "next/image"
//This component will be used to get initial height and position for prompt, also use values like height and position when window will be resized. For now (18.04.2025) i can't animate height from stiff value (in pixels) to auto, so i will create this dummy component to get all values and push to final Prompt component

const InitialPrompt = () => {
    const { promptPosition } = useContext(SkillPromptContext)
    const { promptSkill } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    const initialPromptRef = useRef<HTMLDivElement>(null)
    const [elementProps, setElementProps] = useState<Object | null>(null)
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

    useEffect(() => {
        const updateWidth = setInterval(() => {
            const elementProps = initialPromptRef.current?.getBoundingClientRect()!
            console.log(elementProps.width)
            if (elementProps.width !== 0) {
                clearInterval(updateWidth)
            }
        }, 10)
        return () => {
            clearInterval(updateWidth)
        }
    }, [])

    useEffect(() => {
        console.log(elementProps)
    }, [elementProps])


    return (
        <div id="initialPrompt" ref={initialPromptRef} className="
        relative
        rounded-[7px]
        overflow-hidden
        bg-gray-400
        bg-opacity-30
        w-[90%] sx:w-[350px]"
        >
            <div className="relative bg-red-500 w-[100%] h-[150px]">
                <div className="bg-blue-500 absolute left-[50%] top-[25%] h-[50px] w-[50px]">
                    <Image
                        className=''
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
                <p>{skill.text}</p>
            </div>
        </div>
    )
}

export default InitialPrompt