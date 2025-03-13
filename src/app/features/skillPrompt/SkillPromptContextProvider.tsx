import { createContext, useState } from "react"
import { ChildrenType } from "../navbar/navBarContext/NavBarContextProvider"
import { SetStateAction, Dispatch } from "react"

export type PromptPositionType = {
    top: number,
    left: number
}

export const SkillPromptContext = createContext<{
    promptPosition: {
        position: {
            top: number,
            left: number,
        },
         setPosition: Dispatch<SetStateAction<PromptPositionType>>
    },
    promptDisplay: {
        display: boolean,
        setDisplay: Dispatch<SetStateAction<boolean>>
    },
    promptSkill: {
        skill: {
            name: string,
        },
        setSkill: Dispatch<SetStateAction<{name: string}>>
    }
}>({
    promptPosition: {
        position: {
            top: 0,
            left: 0,
        },
        setPosition: () => {}
    },
    promptDisplay: {
        display: false,
        setDisplay: () => {}
    },
    promptSkill: {
        skill: {
            name: 'X',
        },
        setSkill: () => {}
    }
})

const SkillPromptContextProvider = ({children} : ChildrenType) => {
    const [display, setDisplay] = useState(false)
    const [position, setPosition] = useState<PromptPositionType>({top: 0, left: 0})
    const [skill, setSkill] = useState({name: 'X'})
  return (
    <SkillPromptContext.Provider value={{
        promptPosition: {
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