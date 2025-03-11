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
                top: 0,
                left: 0,
                opacity: 0,
            }}
            animate={{
                display: display ? 'block' : 'none',
                opacity: display ? 1 : 0,
                transition: {
                    opacity: {
                        duration: 0.15,
                        delay: 0.1
                    }
                }

            }}
            className={`fixed z-50 w-full h-full bg-gray-900 bg-opacity-85  overflow-hidden`}
        >
            <div>
                <button
                    onClick={() => setDisplay(false)}
                    className='bg-slate-400 w-[50px] h-[50px]'>
                    X
                </button>
            </div>

        </motion.div>
    )
}

export default SkillPrompt