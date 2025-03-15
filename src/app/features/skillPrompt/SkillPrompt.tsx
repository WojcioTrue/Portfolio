import React, { useContext, useEffect } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import { AnimatePresence, motion } from 'framer-motion'
import SkillButton from './SkillButton'
import SkillInfo from './SkillInfo'


const SkillPrompt = () => {
    const { promptDisplay } = useContext(SkillPromptContext)
    const { display } = promptDisplay

    useEffect(() => {
        display ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    }, [display])

    return (
        <AnimatePresence>
            {display &&
                <motion.div
                    initial={{
                        display: "none",
                        top: 0,
                        left: 0,
                        opacity: 0,
                    }}
                    animate={{
                        display: 'block',
                        opacity: 1,
                        transition: {
                            opacity: {
                                duration: 0.15,
                                delay: 0.1
                            }
                        }
                    }}
                    exit={{
                        opacity: 0,
                        display: 'none',
                        transition: {
                            delay: 0.3
                        }
                    }}
                    className={`fixed z-50 w-full h-full bg-gray-900 bg-opacity-90  overflow-x-hidden overflow-y-scroll`}
                >
                    <SkillButton />
                    <SkillInfo/>
                </motion.div>
            }

        </AnimatePresence>

    )
}

export default SkillPrompt