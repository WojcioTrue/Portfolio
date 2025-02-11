import { createContext, useRef, useState } from "react"
import { Arr } from "../gridOfSkills/SkillsGrid"
import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider"


const TechStackContext = createContext<{

}>({
  isConstraintDrag: null,
  isTestArr: {
    testArr: Arr,
    setTestArr: () => {}
  },
  isClean: {
    clean: false,
    setClean: () => {}
  },
  isTarget: {
    inTarget: { boolean: false, id: '' },
    setInTarget: () => {}
  },
  isOverTarget: {
    overTarget: { boolean: false, id: '' },
    setOverTarget: () => {}
  }
})

const TechStackContextProvider = ({ children }: ChildrenType) => {
  const constraintDrag = useRef<HTMLDivElement>(null)
  const [testArr, setTestArr] = useState(Arr)
  const [clean, setClean] = useState(false)
  const [inTarget, setInTarget] = useState({ boolean: false, id: '' })
  const [overTarget, setOverTarget] = useState({ boolean: false, id: '' })
  return (
    { children }
  )
}

export default TechStackContextProvider