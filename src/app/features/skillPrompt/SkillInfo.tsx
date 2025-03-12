import { useContext, useEffect } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { motion } from "framer-motion"

const SkillInfo = () => {
  const { promptPosition } = useContext(SkillPromptContext)
  const { top, left } = promptPosition.position

  useEffect(() => {
    console.log(promptPosition)
  },[])

  return (
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
    }}
    >
      SkillWrapper
      </motion.div>
  )
}

export default SkillInfo