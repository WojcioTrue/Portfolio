import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useState } from 'react'

type IconType = {
    constraintDrag: React.RefObject<HTMLDivElement>
}

const Icon = ({ constraintDrag }: IconType) => {
    const [isIn, setIsIn] = useState(false)
    const [isIn2, setIsIn2] = useState(false)
    const [dropped, setDropped] = useState(false)
    const [dropped2, setDropped2] = useState(false)

    const controls = useDragControls()
    const animationControls = useAnimationControls()

    return (
        <motion.div
            layout
            id="drag-element-1"
            onDrag={() => {
                // detectEnter("drag-element-1")
            }}
            // onDragEnd={() => dragDrop('drag-element-1', animationControls)}
            className={`
                bg-white 
                w-[30px] 
                h-[30px] 
                absolute 
                z-10`}
            drag={!dropped}
            dragConstraints={constraintDrag}
            whileDrag={{
                scale: 1.2,
            }}
            animate={animationControls}
            dragControls={controls}
            style={{
                top: '50px',
                left: '50px'
            }}
        >
            X
        </motion.div>
    )
}

export default Icon