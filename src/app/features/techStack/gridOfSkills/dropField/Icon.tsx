import { motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useContext, useEffect, useRef } from 'react'
import { TechStackContext } from '../../techStackContext/TechStackContext'
import useDetectEnter from '../skillsHooks.tsx/useDetectEnter'
import useDropped from '../skillsHooks.tsx/useDropped'
import { SkillPromptContext } from '@/app/features/skillPrompt/SkillPromptContextProvider'
import useInitTargetCenter from '../skillsHooks.tsx/useInitTargetCenter'

type IconType = {
    dragElement: string
    imgSrc: string
    whiteImgSrc: string
    text: string
}

const Icon = ({ dragElement, imgSrc, whiteImgSrc, text }: IconType) => {
    const { constraintDrag, dropTarget, isTarget, isOverTarget, isDragged } = useContext(TechStackContext)
    const { promptSkill } = useContext(SkillPromptContext)
    const { setSkill } = promptSkill
    const { detectEnter } = useDetectEnter()
    const { droppedInField } = useDropped()
    const { targetCenter } = useInitTargetCenter()
    const { inTarget } = isTarget
    const { overTarget } = isOverTarget
    const { setDragged } = isDragged
    const controls = useDragControls()
    const animationControls = useAnimationControls()
    const dragElementRef = useRef<HTMLDivElement>(null)
    const dropValues = useRef({ top: 0, left: 0 })

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

    // drag drop target coords for icon after resize
    useEffect(() => {
        const resizeCenter = () => {
            const element = dragElementRef.current!
            const initCenter = targetCenter(element)!
            dropValues.current = initCenter
        }

        // inital position
        resizeCenter()
        window.addEventListener('resize', resizeCenter)
        return () => {
            window.removeEventListener('resize', resizeCenter)
        }
    }, [dropTarget, targetCenter])

    // update grid of icon's positions after resizing
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


    // return icon to default position after dragging
    useEffect(() => {
        if (inTarget.id !== dragElement) {
            animationControls.start({
                x: 0,
                y: 0,
            })
        }
    }, [animationControls, dragElement, inTarget])

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



    return (
        <motion.div
            layout
            id={dragElement}
            ref={dragElementRef}

            onDrag={() => {
                detectEnter(dragElementRef)
                setDragged(true)
            }}

            onDragEnd={() => {
                dragDrop(dragElement)
                setDragged(false)
                setSkill({
                    name: dragElement,
                    src: whiteImgSrc,
                    text: text
                })
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