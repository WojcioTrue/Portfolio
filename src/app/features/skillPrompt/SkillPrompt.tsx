import React, { useContext } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import { motion } from 'framer-motion'


const SkillPrompt = () => {
    const { promptPosition, promptDisplay } = useContext(SkillPromptContext)
    const { display, setDisplay } = promptDisplay
    const { position } = promptPosition

    return (
        <motion.div
            initial={{
                display: "none",
                top: position.top,
                left: position.left,
                opacity: 0
            }}
            animate={{
                display: display ? 'block' : 'none',
                top: position.top,
                left: position.left
            }}
            className={`fixed z-50 w-[200px] h-[200px] bg-gray-500 rounded-[7px]`}
            // style={{
            //     display: display ? 'block' : 'none',
            //     top: position.top,
            //     left: position.left
            // }}
        >
            <button
                onClick={() => setDisplay(false)}
                className='bg-slate-400 w-[50px] h-[50px]'>X</button>
        </motion.div>
    )
}

export default SkillPrompt