import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { TechStackContext } from '../techStackContext/TechStackContext'
import useDetectEnter from './skillsHooks.tsx/useDetectEnter'
import useDropped from './skillsHooks.tsx/useDropped'
import { minify } from 'next/dist/build/swc'

type IconType = {
    dragElement: string
    text: string
    imgSrc: string
    index: number
}

const Icon = ({ dragElement, text, index }: IconType) => {
    const { constraintDrag, dropTarget, isClean, isTarget, isOverTarget } = useContext(TechStackContext)
    const { detectEnter } = useDetectEnter()
    const { droppedInField } = useDropped()
    const { clean, setClean } = isClean
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
            const middleHorizontal = Math.floor(dropTargetWidth / 2)
            const middleVertical = Math.floor(dropTargetHeight / 2)
            const elementHeight = Math.ceil(element.clientHeight / 2)
            const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight/2 - elementHeight


            const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth/2 - element.clientWidth/2 - element.offsetLeft
            setDropValues({ top: tempTop, left: tempLeft })

        }

    }, [elementPos])

    // useEffect(() => {
    //     const element = document.getElementById(dragElement)
    //     console.log(`
    //         dragElement: ${dragElement},
    //         elementPos.top: ${element!.offsetTop},
    //         elementPos.left: ${element!.offsetLeft}
    //         `)
    // }, [dragElement, elementPos])


    // probably to remove, check later
    useEffect(() => {
        if (clean) {
            setClean(false)
            animationControls.start({
                x: 225,
                y: 110,
            })
        }
    }, [animationControls, clean, setClean])

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
                w-[30px] 
                h-[30px] 
                bg-green-300 
                relative
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
            {index}
        </motion.div>
    )
}

export default Icon