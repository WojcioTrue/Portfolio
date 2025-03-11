import React, { useContext, useEffect } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineXMark } from 'react-icons/hi2'

const SkillPrompt = () => {
    const { promptPosition, promptDisplay } = useContext(SkillPromptContext)
    const { display, setDisplay } = promptDisplay
    const { position } = promptPosition

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
                    }}
                    className={`fixed z-50 w-full h-full bg-gray-900 bg-opacity-85  overflow-hidden`}
                >

                    <motion.button
                        initial={{
                            opacity: 0,
                            scale: 1.6,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                opacity: {
                                    duration: 0.2,
                                    delay: 0.3
                                },
                                scale: {
                                    duration: 0.2,
                                    delay: 0.3
                                }
                            }
                        }}
                        onClick={() => setDisplay(false)}
                        className='
                                        absolute
                                        flex
                                        items-center
                                        justify-center
                                        bg-white 
                                        right-[17px]
                                        top-[23px]
                                        rounded-3xl
                                        w-[35px] 
                                        h-[35px]'
                        type="button"
                        aria-controls="skill_prompt_close"
                        aria-expanded="false"
                        aria-label="skill_prompt_close"
                    >
                        <HiOutlineXMark size={'25px'} color="rgb(116, 31, 245)" />
                    </motion.button>
                </motion.div>
            }

        </AnimatePresence>

    )
}

export default SkillPrompt