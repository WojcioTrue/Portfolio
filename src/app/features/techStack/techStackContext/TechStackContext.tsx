import { createContext, useRef, useState } from "react"
import { Arr } from "../gridOfSkills/skillItems"
import { ChildrenType } from "../../navbar/navBarContext/NavBarContextProvider"
import { IconArrType } from "../gridOfSkills/skillItems"
import { SetStateAction, Dispatch } from "react"

export const TechStackContext = createContext<{
  constraintDrag: React.RefObject<HTMLDivElement> | undefined,
  dropTarget: React.RefObject<HTMLDivElement> | undefined,
  skillArray: {
    array: IconArrType[],
    setArray: Dispatch<SetStateAction<IconArrType[]>>
  },
  isTarget: {
    inTarget: { boolean: boolean, id: string },
    setInTarget: Dispatch<SetStateAction<{ boolean: boolean, id: string }>>
  },
  isOverTarget: {
    overTarget: { boolean: boolean, id: string },
    setOverTarget: Dispatch<SetStateAction<{ boolean: boolean, id: string }>>
  }
}>({
  constraintDrag: undefined,
  dropTarget: undefined,
  skillArray: {
    array: [],
    setArray: () => { }
  },
  isTarget: {
    inTarget: { boolean: false, id: '' },
    setInTarget: () => { }
  },
  isOverTarget: {
    overTarget: { boolean: false, id: '' },
    setOverTarget: () => { }
  }
})

const TechStackContextProvider = ({ children }: ChildrenType) => {
  const constraintDrag = useRef<HTMLDivElement | null>(null)
  const dropTarget = useRef<HTMLDivElement | null>(null)
  const [array, setArray] = useState(Arr)
  const [inTarget, setInTarget] = useState({ boolean: false, id: '' })
  const [overTarget, setOverTarget] = useState({ boolean: false, id: '' })

  return (
    <TechStackContext.Provider value={{
      dropTarget,
      constraintDrag,
      skillArray: {
        array,
        setArray,
      },
      isTarget: {
        inTarget,
        setInTarget
      },
      isOverTarget: {
        overTarget,
        setOverTarget
      }
    }}>
      {children}
    </TechStackContext.Provider>
  )
}

export default TechStackContextProvider