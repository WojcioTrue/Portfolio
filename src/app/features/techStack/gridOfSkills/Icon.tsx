import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useEffect } from 'react'
import { IconArrType } from './SkillsGrid'

type IconType = {
    constraintDrag: React.RefObject<HTMLDivElement>
    dragElement: string
    detectEnter: (el: string) => void
    overTarget: { boolean: boolean, id: string }
    top: number
    left: number
    inTarget: { boolean: boolean, id: string }
    droppedInField: (id: string) => void
    arr: IconArrType[]
    cleanTarget: { boolean: boolean, set: React.Dispatch<React.SetStateAction<boolean>> }
    text: string
    imgSrc: string
}

const Icon = ({ constraintDrag, dragElement, detectEnter, overTarget, top, left, inTarget, droppedInField, cleanTarget, text }: IconType) => {
    const controls = useDragControls()
    const animationControls = useAnimationControls()

    useEffect(() => {
        if (cleanTarget.boolean) {
            cleanTarget.set(false)
            animationControls.start({
                x: left,
                y: top,
            })
        }
    }, [cleanTarget, animationControls, left, top])

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