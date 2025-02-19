import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { TechStackContext } from '../techStackContext/TechStackContext'
import useDetectEnter from './skillsHooks.tsx/useDetectEnter'
import useDropped from './skillsHooks.tsx/useDropped'
import Image from 'next/image'

type IconType = {
    dragElement: string
    imgSrc: string
}

const Icon = ({ dragElement, imgSrc }: IconType) => {
    const { constraintDrag, dropTarget, isTarget, isOverTarget } = useContext(TechStackContext)
    const { detectEnter } = useDetectEnter()
    const { droppedInField } = useDropped()
    const { inTarget } = isTarget
    const { overTarget } = isOverTarget
    const controls = useDragControls()
    const animationControls = useAnimationControls()
    const [elementPos, setElementPos] = useState({ top: 0, left: 0 })
    const [dropValues, setDropValues] = useState({ top: 0, left: 0 })

    useEffect(() => {
        const element = document.getElementById(dragElement)
        const offsetLeft = element!.offsetLeft
        const offsetTop = element!.offsetTop
        setElementPos({ top: offsetTop, left: offsetLeft })
    }, [])

    useEffect(() => {
        const element = document.getElementById(dragElement)!
        if (dropTarget?.current !== undefined && dropTarget?.current !== null) {
            const dropTargetHeight = dropTarget.current.clientHeight
            const dropTargetWidth = dropTarget.current.clientWidth
            const elementHeight = Math.ceil(element.clientHeight / 2)
            const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight / 2 - elementHeight


            const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth / 2 - element.clientWidth / 2 - element.offsetLeft
            setDropValues({ top: tempTop, left: tempLeft })

        }

    }, [dragElement, dropTarget, elementPos])

    useEffect(() => {
        if (inTarget.id !== dragElement) {
            animationControls.start({
                x: 0,
                y: 0,
            })
        }
    }, [animationControls, dragElement, elementPos.left, elementPos.top, inTarget])

    const dragDrop = (el: string) => {
        if (overTarget.boolean) {
            droppedInField(el)
            animationControls.start({
                x: dropValues.left,
                y: dropValues.top,
            })
        }
        else {
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
            onDragEnd={() => {
                dragDrop(dragElement)
            }}
            className={`
                w-[60px] 
                h-[60px] 
                bg-green-300 
                relative
                flex
                items-center
                z-50
                justify-center
                bg-gradient-to-tr from-my-gradient1 to-my-gradient2 md:w-[35px] md:h-[35px] shadow-myshadow rounded-lg p-[7px]
                `}
            drag={!(inTarget.id === dragElement)}
            dragConstraints={constraintDrag}
            dragElastic={0.02}
            whileDrag={{
                scale: 1.2,
            }}
            animate={animationControls}
            dragControls={controls}
        >
            <div className='z-100 w-full h-full' 
            style={{
                backgroundImage: (`url(${imgSrc})`),
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            >
            
            </div>
        </motion.div>
    )
}

export default Icon