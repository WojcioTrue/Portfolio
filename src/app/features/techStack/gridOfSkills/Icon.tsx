import { AnimationControls, motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { IconArrType } from './SkillsGrid'

type IconType = {
    constraintDrag: React.RefObject<HTMLDivElement>
    dragElement: string
    detectEnter: (el: string) => void
    overTarget: { boolean: boolean, id: string }
    top: number
    left: number
    marker: string
    dropped: boolean
    droppedInField: (id: string) => void
    arr: IconArrType[]
}

const Icon = ({ constraintDrag, dragElement, detectEnter, overTarget, top, left, marker, dropped, droppedInField }: IconType) => {
    const controls = useDragControls()
    const animationControls = useAnimationControls()


    const fuckingClick = () => {
        animationControls.start({
            x: 0,
            y: 0,
        })
    }

    const dragDrop = (el: string) => {
        if (overTarget.boolean) {
            droppedInField(el)
            animationControls.start({
                x: 225,
                y: 110,
            })
        } else {
            animationControls.start({
                x: 0,
                y: 0,
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
            onDragEnd={() => dragDrop(dragElement)}
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
        >
            {marker}
            <div onClick={() => fuckingClick()} className='bg-green-800 w-[50px] h-[30px]'>
                clear
            </div>
        </motion.div>
    )
}

export default Icon