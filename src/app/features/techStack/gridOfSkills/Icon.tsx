import { AnimationControls, motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IconArrType } from './SkillsGrid'

type IconType = {
    constraintDrag: React.RefObject<HTMLDivElement>
    dragElement: string
    detectEnter: (el: string) => void
    isIn: { boolean: boolean, id: string }
    top: number
    left: number
    marker: string
    dropped: boolean
    droppedInField: (id: string) => void
    arr: IconArrType[]
}

const Icon = ({ constraintDrag, dragElement, detectEnter, isIn, top, left, marker, dropped, droppedInField, arr }: IconType) => {
    const controls = useDragControls()
    const animationControls = useAnimationControls()

    useEffect(() => {
        const iconInside = arr.some((x) => x.dropped === true);
        // if(!iconInside){
        //     controls.set({
        //         x: 225 - left,
        //         y: 110 - top,
        //     })
        // }
    }, [arr])

    const dragDrop = (el: string, controls: AnimationControls) => {
        if (isIn.boolean) {
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