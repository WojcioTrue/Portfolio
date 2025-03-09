import { useContext } from "react"
import SkillButtons from "../../buttons/ButtonsWrapper"
import { TechStackContext } from "../../../techStackContext/TechStackContext"
import DropTargetBg from "./DropTargetBg"
import TargetDescripton from "./TargetDescripton"

const DropTarget = () => {
    const { dropTarget, isOverTarget, isTarget, isDragged } = useContext(TechStackContext)
    const isOver = isOverTarget.overTarget.boolean
    const isInside = isTarget.inTarget.boolean

    const backgroundColor = (isOver || isInside) ? 'bg-purple-50' : 'bg-white'

    return (
        <div className=' 
            w-[250px] 
            rounded-lg 
            pb-3
            z-10'
        >
            <TargetDescripton/>
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