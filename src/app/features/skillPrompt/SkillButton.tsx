import { motion } from 'framer-motion'
import { HiOutlineXMark } from 'react-icons/hi2'
import { SkillPromptContext } from './SkillPromptContextProvider'
import { useContext } from 'react'

const SkillButton = () => {
    const { promptDisplay, startResize } = useContext(SkillPromptContext)
    const { setResize } = startResize
    const { setDisplay } = promptDisplay
    return (
        <motion.button
            initial={{
                opacity: 0,
                scale: 1.6,
                zIndex: 100,
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
            exit={{
                scale: 1.6,
                opacity: 0
            }}
            onClick={() => {
                setDisplay(false)
                setResize(false)
            }}
            className='
                    absolute
                    flex
                    items-center
                    justify-center
                     bg-gradient-to-tr 
                    from-my-gradient1
                    to-my-gradient2
                    right-[10px]
                    top-[23px]
                    rounded-3xl
                    w-[35px] 
                    h-[35px]'
            type="button"
            aria-controls="skill_prompt_close"
            aria-expanded="false"
            aria-label="skill_prompt_close"
        >
            <HiOutlineXMark size={'25px'} color="white" />
        </motion.button>
    )
}

export default SkillButton