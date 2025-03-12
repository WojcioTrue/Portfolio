import { useContext, useEffect } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"

const SkillInfo = () => {
  const { promptPosition, promptDisplay } = useContext(SkillPromptContext)
  const { display } = promptDisplay
  const { top, left } = promptPosition.position

  useEffect(() => {
    console.log(promptPosition)
  }, [])

  return (
    <AnimatePresence>
      {display &&
        <motion.div className="
            absolute 
            top-1/2 
            left-1/2 
            bg-white 
            w-[250px] 
            h-[120px]
            rounded-[7px]
            "
          initial={{
            top: top,
            left: left,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              opacity: {
                delay: 0.3,
              }
            }
          }}
          exit={{
            opacity: 0,
          }}
        >
          SkillWrapper
        </motion.div>}

    </AnimatePresence>

  )
}

export default SkillInfo