import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
type SkillButtonType = {
    onClick?: () => void,
    disabled?: boolean,
    icon: ReactElement,
    text?: string
}

const SkillButton = ({ onClick, disabled, icon, text }: SkillButtonType) => {

    return (

        <motion.button
            layout
            transition={{
                duration: 0.3,
                type: "Tween"
            }}
            animate={{
                filter: disabled ? "grayscale(0.7)" : "grayscale(0)",
            }}
            whileHover={{
                scale: disabled ? 1 : 1.1,
                transition: { duration: 0.2 },
            }}
            whileTap={{
                scale: disabled ? 1 : 0.9,
                transition: { duration: 0.2 },
            }}
            onClick={onClick} disabled={disabled} className='
            bg-transparent 
            flex
            gap-1
            items-center
            px-3
            text-white
            h-[45px]
            bg-gradient-to-tr 
            from-my-gradient1 
            to-my-gradient2
            rounded-md
            '>
            {text}
            {icon}
        </motion.button>
    )
}

export default SkillButton