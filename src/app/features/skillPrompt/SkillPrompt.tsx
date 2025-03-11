import React, { useContext, useEffect } from 'react'
import { SkillPromptContext } from './SkillPromptContextProvider'
import { motion } from 'framer-motion'
import { HiOutlineXMark } from 'react-icons/hi2'

const SkillPrompt = () => {
    const { promptPosition, promptDisplay } = useContext(SkillPromptContext)
    const { display, setDisplay } = promptDisplay
    const { position } = promptPosition

  useEffect(() => {
    display ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
  }, [display])

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

            <motion.button
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
            <div>
            </div>

        </motion.div>
    )
}

export default SkillPrompt