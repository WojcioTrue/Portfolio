import { useContext, useEffect } from "react"
import SkillButtons from "../../buttons/ButtonsWrapper"
import { TechStackContext } from "../../../techStackContext/TechStackContext"
import DropTargetBg from "./DropTargetBg"
import TargetDescripton from "./TargetDescripton"
import { SkillPromptContext } from "@/app/features/skillPrompt/SkillPromptContextProvider"


const DropTarget = () => {
    const { dropTarget, isOverTarget, isTarget } = useContext(TechStackContext)
    const { promptProps, promptDisplay } = useContext(SkillPromptContext)
    const { setDisplay } = promptDisplay
    const isOver = isOverTarget.overTarget.boolean
    const isInside = isTarget.inTarget.boolean

    const backgroundColor = (isOver || isInside) ? 'bg-purple-50' : 'bg-white'

    useEffect(() => {
        
            if (isTarget.inTarget.id !== '') {
                setDisplay(true)
            }
    }, [isTarget.inTarget.id, setDisplay])

    return (
        <div className=' 
            w-[250px] 
            rounded-lg 
            pb-3
            z-10'
        >
            <TargetDescripton />
            <div ref={dropTarget} id="drag-target"
                className={`
                    transition-all duration-150
                    relative
                    h-[120px] 
                    m-auto 
                    mb-5  
                    my-2
                    border-my-lightGray 
                    border-[1px]
                    rounded-[7px] 
                    shadow-myshadow
                    ${backgroundColor}
                   `
                }>
                <DropTargetBg />
            </div>
            <SkillButtons />
        </div>
    )
}

export default DropTarget