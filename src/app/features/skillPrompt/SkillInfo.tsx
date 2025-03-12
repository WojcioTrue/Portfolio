import { useContext, useEffect } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"

const SkillInfo = () => {
  const { promptPosition, promptDisplay } = useContext(SkillPromptContext)
  const { display } = promptDisplay
  const { top, left } = promptPosition.position



  return (
    <AnimatePresence>
      {display &&
        <motion.div 
        layout
        className="
            absolute 
            bg-white 
            w-[250px] 
            h-[120px]
            rounded-[7px]
            "
          initial={{
            top: top,
            left: left,
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            top: 100,

            transition: {
              opacity: {
                delay: 0.3,
              },
              scale: {
                delay: 0.3,
              },
              top: {
                type: 'spring',
                delay: 0.35,
              },
            }
          }}
          exit={{
            opacity: 0,
            scale: 1.4,
          }}
        >
          SkillWrapper
        </motion.div>}

    </AnimatePresence>

  )
}

export default SkillInfo