'use client'
import { useContext } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"

const SkillInfo = () => {
  const { promptPosition, promptDisplay } = useContext(SkillPromptContext)
  const { display } = promptDisplay
  const { top, left } = promptPosition.position

  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  return (
    <AnimatePresence mode="wait">
      {display &&
        <motion.div

          className="
          absolute
            bg-white 
            rounded-[7px]
            "
          initial={{
            left: left,
            top: top,
            width: 250,
            height: 120,
            opacity: 0,
          }}
          animate={{
            top: 150,
            left: middleX,
            width: 400,
            height: 600,
            opacity: 1,
            translateX: '-50%',

            transition: {
              top: {
                type: 'spring',
                delay: 0.3,
                duration: 0.5
              },
              left: {
                type: 'spring',
                delay: 0.3,
                duration: 0.5
              },
              width: {
                type: 'spring',
                delay: 0.6,
                duration: 0.3
              },
              height: {
                type: 'spring',
                delay: 0.7,
                duration: 0.5
              },
              translateX: {
                type: 'spring',
                delay: 0.3,
                duration: 0.5
              },
            }
          }}
          exit={{
            scale: 1.2,
            opacity: 0
          }}
        >
          SkillWrapper
        </motion.div>}

    </AnimatePresence>

  )
}

export default SkillInfo