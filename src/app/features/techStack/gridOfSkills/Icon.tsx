import { AnimationControls, motion, useAnimationControls, useDragControls } from 'framer-motion'
import React, { useState } from 'react'


type IconType = {
    constraintDrag: React.RefObject<HTMLDivElement>
    dragElement: string
    detectEnter: (el: string) => void
    isIn: boolean
}

const Icon = ({ constraintDrag, dragElement, detectEnter, isIn }: IconType) => {
    const [dropped, setDropped] = useState(false)
    const controls = useDragControls()
    const animationControls = useAnimationControls()

    const dragDrop = (el: string, controls: AnimationControls) => {
        const parent = document.getElementById('drag-component')
        const element = document.getElementById(el)!
        const target = document.getElementById('drag-target')!
        console.log(element.style.top)
        if (isIn) {
            setDropped(true)
            console.log('triggered')
            controls.stop()
            controls.set({
                x: 225 - 50,
                y: 110 - 50,
                transition: {
                    duration: 0
                }
            })
        }
    }

    return (
        <motion.div
            layout
            id={dragElement}
            onDrag={() => {
                detectEnter(`drag-element-${1}`)
            }}
            onDragEnd={() => dragDrop(`drag-element-${1}`, animationControls)}
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