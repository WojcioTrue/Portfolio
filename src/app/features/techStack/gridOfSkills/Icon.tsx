import { AnimationControls, motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useState } from 'react'


type IconType = {
    constraintDrag: React.RefObject<HTMLDivElement>
    dragElement: string
    detectEnter: (el: string) => void
    isIn: boolean
    top: number
    left: number
    marker: string
    dropped: boolean
    droppedInField: (id: string) => void
}

const Icon = ({ constraintDrag, dragElement, detectEnter, isIn, top, left, marker, dropped, droppedInField }: IconType) => {
    
    const controls = useDragControls()
    const animationControls = useAnimationControls()

    const dragDrop = (el: string, controls: AnimationControls) => {
        // const parent = document.getElementById('drag-component')
        const element = document.getElementById(el)!
        // const target = document.getElementById('drag-target')!
        if (isIn) {
            controls.stop()
            droppedInField(el)
            controls.set({
                x: 225 - left,
                y: 110 - top,
            })
        }
    }

    return (
        <motion.div
            layout
            id={dragElement}
            onDrag={() => {
                detectEnter(dragElement)
            }}
            onDragEnd={() => dragDrop(dragElement, animationControls)}
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
                top: top,
                left: left
            }}
        >
            {marker}
        </motion.div>
    )
}

export default Icon