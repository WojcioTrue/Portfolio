import { motion } from "framer-motion"
import Image from "next/image"
import { useContext, useEffect } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"

const ImgSkill = () => {
    const {promptSkill} = useContext(SkillPromptContext)

    useEffect(() => {
        console.log(promptSkill.skill)
    },[])

    return (
        <motion.div className="
    absolute 
    top-1/2 
    left-1/2 
    -translate-x-1/2 
    -translate-y-1/2 
    bg-white 
    w-[50px] 
    h-[50px]">

        </motion.div>
    )
}

export default ImgSkill