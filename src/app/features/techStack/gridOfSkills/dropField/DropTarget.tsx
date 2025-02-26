import { useContext, useEffect } from "react"
import SkillButtons from "../buttons/ButtonsWrapper"
import { TechStackContext } from "../../techStackContext/TechStackContext"
import DropTargetBg from "./DropTargetBg"


const DropTarget = () => {
    const { dropTarget, isOverTarget, isTarget } = useContext(TechStackContext)
    const isOver = isOverTarget.overTarget.boolean
    const isInside = isTarget.inTarget.boolean

    return (
        <div className=' 
            w-[250px] 
            rounded-lg 
            pb-3
            z-10'
        >
            <p className='block m-auto w-[80%] text-center text-my-gray select-none text-wrap'>Drop icon below :)</p>
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
                    bg-white
                    // ${(isOver || isInside) ? 'bg-purple-50' : 'bg-white' }
                   `
                }>
                <DropTargetBg />
            </div>
            <SkillButtons />
        </div>
    )
}

export default DropTarget