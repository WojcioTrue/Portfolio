import { ReactElement, ReactNode, useRef, useState } from "react"
import { Arr } from "../gridOfSkills/SkillsGrid"

import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider"

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