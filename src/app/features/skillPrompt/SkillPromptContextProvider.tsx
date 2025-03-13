import { createContext, useState } from "react"
import { ChildrenType } from "../navbar/navBarContext/NavBarContextProvider"
import { SetStateAction, Dispatch } from "react"

export type PromptPositionType = {
    top: number,
    left: number
}

export type PromptSkillObj = {

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
        skill: PromptSkillObj,
        setSkill: Dispatch<SetStateAction<PromptSkillObj>>
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
            name: '',
            src: '',
            text: ''
        },
        setSkill: () => {}
    }
})

const SkillPromptContextProvider = ({children} : ChildrenType) => {
    const [display, setDisplay] = useState(false)
    const [position, setPosition] = useState<PromptPositionType>({top: 0, left: 0})
    const [skill, setSkill] = useState<PromptSkillObj>({
        name: '',
        src: '',
        text: ''
    })
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