import { createContext } from "react"
import { ChildrenType } from "../navbar/navBarContext/NavBarContextProvider"

const SkillPromptContext = createContext({

})

const SkillPromptContextProvider = ({children} : ChildrenType) => {
  return (
    {children}
  )
}

export default SkillPromptContextProvider