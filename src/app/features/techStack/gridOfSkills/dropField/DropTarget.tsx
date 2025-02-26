import { useContext, useEffect } from "react"
import SkillButtons from "../buttons/ButtonsWrapper"
import { TechStackContext } from "../../techStackContext/TechStackContext"
import DropTargetBg from "./DropTargetBg"
import { AnimatePresence, motion } from "framer-motion"

const DropTarget = () => {
    const { dropTarget, isOverTarget, isTarget, isDragged } = useContext(TechStackContext)
    const isOver = isOverTarget.overTarget.boolean
    const isInside = isTarget.inTarget.boolean
    const dragged = isDragged.dragged

    const backgroundColor = (isOver || isInside) ? 'bg-purple-50' : 'bg-white'

    return (
        <div className=' 
            w-[250px] 
            rounded-lg 
            pb-3
            z-10'
        >
            <div className="relative mb-10 w-full">
            <motion.p
                initial={{
                    opacity: 1,
                }}
                animate={{
                    opacity: !dragged ? 1 : 0,
                    transition: {
                        duration: 0.2,
                        delay: !dragged ? 0.3 : 0
                    }
                }}
                className={`
                    absolute 
                    left-[50%] 
                    -translate-x-[50%]
                    block 
                    m-auto 
                    w-[80%] t
                    text-center 
                    text-my-gray 
                    select-none text-wrap`}>
                        Grab some icon...
                </motion.p>
               <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: !dragged ? 0 : 1,
                    transition: {
                        duration: 0.2,
                        delay: !dragged ? 0 : 0.3
                    }
                }}
                className={`
                    absolute 
                    left-[50%] 
                    -translate-x-[50%]
                    block 
                    m-auto 
                    w-[80%] t
                    text-center 
                    text-my-gray 
                    select-none text-wrap`}>
                        ...and drop it below !
                </motion.p>

            </div>

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