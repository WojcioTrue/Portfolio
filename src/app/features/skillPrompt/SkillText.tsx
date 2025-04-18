import { useContext } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { motion } from "framer-motion"

type SkillTextType = {
    initAnimation: boolean
}

const SkillText = (initAnimation: SkillTextType) => {
    const { promptSkill } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    return (
        <motion.div
            id="skill-text"
            className="py-[30px] text-white mx-6">
            <motion.p
                initial={{
                    opacity: 0,
                    x: -30
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.8
                    }
                }}
                className="text-4xl">{skill.name}</motion.p>

            <motion.div
                initial={{
                    opacity: 0,
                    x: -30
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.9
                    }
                }}
                className="w-full bg-my-lightBackground my-3 h-[1px]"></motion.div>
            <motion.p
                initial={{
                    opacity: 0,
                    x: -30
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 1
                    }
                }}
            >{skill.text}</motion.p>
        </motion.div>
    )
}

export default SkillText