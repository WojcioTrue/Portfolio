import { useContext } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { motion } from "framer-motion"

const SkillText = () => {
    const { promptSkill } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    return (
        <motion.div
            className="pt-[280px] text-white mx-6">
            <motion.p
                initial={{
                    display: 'none',
                    opacity: 0,
                    x: -30
                }}
                animate={{
                    display: 'block',
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.8
                    }
                }}
                className="text-5xl">{skill.name}</motion.p>

            <motion.div
                initial={{
                    display: 'none',
                    opacity: 0,
                    x: -30
                }}
                animate={{
                    display: 'block',
                    opacity: 1,
                    x: 0,
                    transition: {
                        delay: 0.9
                    }
                }}
                className="w-full bg-my-lightBackground my-5 h-[1px]"></motion.div>
            <motion.p
                initial={{
                    display: 'none',
                    opacity: 0,
                    x: -30
                }}
                animate={{
                    display: 'block',
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