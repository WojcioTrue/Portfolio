import { createContext, useState } from "react"
import { ChildrenType } from "../navbar/navBarContext/NavBarContextProvider"
import { SetStateAction, Dispatch } from "react"



export type DropTargetPropsType = {
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
    x: number,
    y: number,
}

export type PromptPropsType = {
    top: number,
    bottom: number,
    left: number,
    right: number,
    height: number,
    width: number,
}

export type PromptSkillObj = {
    name: string,
    src: string,
    text: string
}

export const SkillPromptContext = createContext<{
    dropTargetProps: {
        position: DropTargetPropsType,
        setPosition: Dispatch<SetStateAction<DropTargetPropsType>>,
    },
    promptProps: {
        position: PromptPropsType,
        setPosition: Dispatch<SetStateAction<PromptPropsType>>
    },
    promptDisplay: {
        display: boolean,
        setDisplay: Dispatch<SetStateAction<boolean>>
    },
    promptSkill: {
        skill: PromptSkillObj,
        setSkill: Dispatch<SetStateAction<PromptSkillObj>>
    }
}>({
    dropTargetProps: {
        position: {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0,
        },
        setPosition: () => { },
    },
    promptProps: {
        position: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: 0,
            width: 0,
        },
        setPosition: () => { }
    },
    promptDisplay: {
        display: false,
        setDisplay: () => { }
    },
    promptSkill: {
        skill: {
            name: '',
            src: '',
            text: ''
        },
        setSkill: () => { }
    }
})

const SkillPromptContextProvider = ({ children }: ChildrenType) => {
    const [display, setDisplay] = useState(false)
    const [dropProps, setDropProps] = useState<DropTargetPropsType>({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
    })
    const [position, setPosition] = useState<PromptPropsType>({
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 0,
        width: 0
    })
    const [skill, setSkill] = useState<PromptSkillObj>({
        name: '',
        src: '',
        text: ''
    })
    return (
        <SkillPromptContext.Provider value={{
            dropTargetProps: {
                position: dropProps,
                setPosition: setDropProps,
            },
            promptProps: {
                position,
                setPosition,
            },
            promptDisplay: {
                display,
                setDisplay
            },
            promptSkill: {
                skill,
                setSkill
            }
        }}>
            {children}
        </SkillPromptContext.Provider>
    )
}

export default SkillPromptContextProvider