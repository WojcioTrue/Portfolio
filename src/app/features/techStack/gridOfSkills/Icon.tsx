import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import { TechStackContext } from '../techStackContext/TechStackContext'
import useDetectEnter from './skillsHooks.tsx/useDetectEnter'

type IconType = {
    dragElement: string
    top: number
    left: number
    droppedInField: (id: string) => void
    text: string
    imgSrc: string
}

const Icon = ({ dragElement, top, left, droppedInField, text }: IconType) => {
    const { constraintDrag, isClean, isTarget, isOverTarget } = useContext(TechStackContext)
    const { detectEnter } = useDetectEnter()
    const { clean, setClean } = isClean
    const { inTarget } = isTarget
    const { overTarget } = isOverTarget
    const controls = useDragControls()
    const animationControls = useAnimationControls()

    useEffect(() => {
        if (clean) {
            setClean(false)
            animationControls.start({
                x: left,
                y: top,
            })
        }
    }, [animationControls, clean, left, setClean, top])

    useEffect(() => {
        if (inTarget.id !== dragElement) {
            animationControls.start({
                x: left,
                y: top,
            })
        }
    }, [animationControls, dragElement, inTarget, left, top])

    const dragDrop = (el: string) => {
        if (overTarget.boolean) {
            droppedInField(el)
            animationControls.start({
                x: 225,
                y: 110,
            })
        } else {
            animationControls.start({
                x: left,
                y: top,
            })
        }
    }

    return (
        <motion.div
            layout
            id={dragElement}
            initial={{
                y: top,
                x: left
            }}
            onDrag={() => {
                detectEnter(dragElement)
            }}
            onDragEnd={() => {
                dragDrop(dragElement)
            }}
            className={`
                bg-slate-400
                w-[30px] 
                h-[30px] 
                absolute 
                z-10`}
            drag={!(inTarget.id === dragElement)}
            dragConstraints={constraintDrag}
            dragElastic={0.02}
            whileDrag={{
                scale: 1.2,
            }}
            animate={animationControls}
            dragControls={controls}
        >
            {text}
        </motion.div>
    )
}

export default Icon