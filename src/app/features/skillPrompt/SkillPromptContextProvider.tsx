import { createContext, useState } from "react"
import { ChildrenType } from "../navbar/navBarContext/NavBarContextProvider"
import { SetStateAction, Dispatch } from "react"

const defaultPosition = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
}

export type DimensionPropsType = {
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
    x: number,
    y: number,
}

export type PromptSkillObj = {
    name: string,
    src: string,
    text: string
}

export const SkillPromptContext = createContext<{
    dropTargetProps: {
        position: DimensionPropsType,
        setPosition: Dispatch<SetStateAction<DimensionPropsType>>,
    },
    promptProps: {
        position: DimensionPropsType,
        setPosition: Dispatch<SetStateAction<DimensionPropsType>>
    },
    startResize: {
        resize: boolean,
        setResize: Dispatch<SetStateAction<boolean>>
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
        position: defaultPosition,
        setPosition: () => { },
    },
    promptProps: {
        position: defaultPosition,
        setPosition: () => { }
    },
    startResize: {
        resize: false,
        setResize: () => {},
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
    const [dropProps, setDropProps] = useState<DimensionPropsType>(defaultPosition)
    const [position, setPosition] = useState<DimensionPropsType>(defaultPosition)
    const [resize, setResize] = useState<boolean>(false)
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
            startResize: {
                resize,
                setResize,
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