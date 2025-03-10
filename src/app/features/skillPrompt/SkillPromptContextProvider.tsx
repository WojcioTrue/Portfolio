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
    }
}>({
    promptPosition: {
        position: {
            top: 22,
            left: 22,
        },
        setPosition: () => {}
    }
})

const SkillPromptContextProvider = ({children} : ChildrenType) => {
    const [position, setPosition] = useState<PromptPositionType>({top: 22, left: 22})
  return (
    <SkillPromptContext.Provider value={{
        promptPosition: {
            position,
            setPosition,
        }
    }}>
            {children}
    </SkillPromptContext.Provider>
  )
}

export default SkillPromptContextProvider