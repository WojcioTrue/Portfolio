'use client'
import { useContext } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"
import DropTargetBg from "../techStack/gridOfSkills/dropField/dropTarget/DropTargetBg"

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
          rounded-[7px]
            "
          initial={{
            left: left,
            top: top,
            width: 250,
            height: 120,
            opacity: 0,
            background: "rgb(250 245 255)"
          }}
          animate={{
            top: 150,
            left: middleX,
            width: 400,
            height: 600,
            opacity: 1,
            translateX: '-50%',
            background: 'linear-gradient(45deg, rgb(191, 64, 191) 20%, rgb(127, 0, 255) 75%',
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
          <p className="text-white">SkillWrapper</p>
        </motion.div>}

    </AnimatePresence>

  )
}

export default SkillInfo