import React, { useContext, useEffect, useRef } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import Image from "next/image"
//This component will be used to get initial height and position for prompt, also use values like height and position when window will be resized. For now (18.04.2025) i can't animate height from stiff value (in pixels) to auto, so i will create this dummy component to get all values and push to final Prompt component

const InitialPrompt = () => {
    const { promptProps, promptSkill, startResize } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    const { setResize } = startResize
    const initialPromptRef = useRef<HTMLDivElement>(null)
    const { setPosition } = promptProps

    useEffect(() => {
        const updateWidth = setInterval(() => {
            const elementProps = initialPromptRef.current?.getBoundingClientRect()!
            //guard clause after element is renered
            const { top, right, bottom, left, width, height, x, y } = elementProps
            if (elementProps.width !== 0) {
                clearInterval(updateWidth)

                setPosition({ top, right, bottom, left, width, height, x, y })
            }
        }, 10)
        return () => {
            clearInterval(updateWidth)
        }
    }, [setPosition])

    useEffect(() => {
        const reSizeFunc = () => {
            const elementProps = initialPromptRef.current?.getBoundingClientRect()!
            const { top, right, bottom, left, width, height, x, y } = elementProps
            setResize(true)
            setPosition({ top, right, bottom, left, width, height, x, y })
        }
        window.addEventListener('resize', reSizeFunc)
        return () => {
            window.removeEventListener('resize', reSizeFunc)
        }
    }, [setPosition, setResize])

    return (
        <div id="initialPrompt" ref={initialPromptRef} className="
        relative
        rounded-[7px]
        opacity-0
        overflow-hidden
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
            </div>
        </div>
    )
}

export default InitialPrompt