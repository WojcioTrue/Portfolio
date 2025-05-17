import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useContext, useEffect, useState, useRef } from 'react'
import { TechStackContext } from '../../techStackContext/TechStackContext'
import useDetectEnter from '../skillsHooks.tsx/useDetectEnter'
import useDropped from '../skillsHooks.tsx/useDropped'
import { SkillPromptContext } from '@/app/features/skillPrompt/SkillPromptContextProvider'

type IconType = {
    dragElement: string
    imgSrc: string
    whiteImgSrc: string
    text: string
}

const Icon = ({ dragElement, imgSrc, whiteImgSrc, text }: IconType) => {
    const { constraintDrag, dropTarget, isTarget, isOverTarget, isDragged } = useContext(TechStackContext)
    const { promptSkill } = useContext(SkillPromptContext)
    const { skill, setSkill } = promptSkill
    const { detectEnter } = useDetectEnter()
    const { droppedInField } = useDropped()
    const { inTarget } = isTarget
    const { overTarget } = isOverTarget
    const { setDragged } = isDragged
    const controls = useDragControls()
    const animationControls = useAnimationControls()
    const dragElementRef = useRef<HTMLDivElement>(null)
    const [elementPos, setElementPos] = useState({ top: 0, left: 0 })
    const dropValues = useRef({ top: 0, left: 0 })
    const [active, setActive] = useState<string>('')


    // probably redundant useEffect
    // useEffect(() => {
    //     const element = dragElementRef.current!
    //     const offsetLeft = element!.offsetLeft
    //     const offsetTop = element!.offsetTop
    //     setElementPos({ top: offsetTop, left: offsetLeft })
    // }, [dragElement])

    useEffect(() => {
        const element = dragElementRef.current!
        if (dropTarget?.current !== undefined && dropTarget?.current !== null) {
            const dropTargetHeight = dropTarget.current.clientHeight
            const dropTargetWidth = dropTarget.current.clientWidth
            const elementHeight = Math.ceil(element.clientHeight / 2)
            const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight / 2 - elementHeight


            const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth / 2 - element.clientWidth / 2 - element.offsetLeft
            dropValues.current = { top: tempTop, left: tempLeft }

        }

    }, [dragElement, dropTarget, elementPos])

    useEffect(() => {
        window.addEventListener('resize', () => {
            const element = dragElementRef.current!
            if (dropTarget?.current !== undefined && dropTarget?.current !== null) {
                const dropTargetHeight = dropTarget.current.clientHeight
                const dropTargetWidth = dropTarget.current.clientWidth
                const elementHeight = Math.ceil(element.clientHeight / 2)
                const tempTop = dropTarget.current.offsetTop - element.offsetTop + dropTargetHeight / 2 - elementHeight

                const tempLeft = dropTarget.current.offsetLeft + dropTargetWidth / 2 - element.clientWidth / 2 - element.offsetLeft
                dropValues.current = { top: tempTop, left: tempLeft }
            }
        })
    }, [dropTarget])



    // update icon position after resizing
    useEffect(() => {
        const resizeIcons = () => {
            if (inTarget.id !== dragElement) {
                animationControls.start({
                    x: 0,
                    y: 0,
                })
            }
        }
        window.addEventListener('resize', resizeIcons)
        return () => {
            window.removeEventListener('resize', resizeIcons)
        }
    }, [animationControls, dragElement, inTarget.id])

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
                x: dropValues.current.left,
                y: dropValues.current.top,
            })
        }
        else {
            animationControls.start({
                x: 0,
                y: 0,
            })
        }
    }

    useEffect(() => {
        const resize = () => {
            if (inTarget.id === dragElement) {
                animationControls.start({
                    x: dropValues.current.left,
                    y: dropValues.current.top,
                })
            }
        }
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [animationControls, dragElement, , inTarget.id])

    const draggedElement = () => {
        setActive(dragElement)
    }

    const dragEvent = () => {
        setDragged(true)
    }

    const dragEventEnd = () => {
        setDragged(false)
    }

    const updateSkillPrompt = () => {
        setSkill({
            name: dragElement,
            src: whiteImgSrc,
            text: text
        })
    }

    return (
        <motion.div
            layout
            id={dragElement}
            ref={dragElementRef}
            onDrag={() => {
                detectEnter(dragElement)
                draggedElement()
                dragEvent()
            }}
            onDragEnd={() => {
                dragDrop(dragElement)
                dragEventEnd()
                updateSkillPrompt()
            }}
            className={`
                w-[55px] 
                h-[55px] 
                relative
                bg-white
                flex
                items-center
                justify-center
                 border-[1px]
                border-my-purple
                border-opacity-15
                shadow-myshadow 
                rounded-lg 
                cursor-pointer
                z-20
                `}
            drag={!(inTarget.id === dragElement)}
            dragConstraints={constraintDrag}
            dragElastic={0.02}
            whileDrag={{
                scale: 1.1,
                zIndex: "100",
            }}
            animate={animationControls}
            dragControls={controls}
        >
            <div className={`w-[32px] h-[32px] z-10`}
                style={{
                    backgroundImage: (`url(${imgSrc})`),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
            </div>
        </motion.div>
    )
}

export default Icon