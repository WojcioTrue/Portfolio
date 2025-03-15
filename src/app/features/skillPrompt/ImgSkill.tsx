import { motion } from "framer-motion"
import Image from "next/image"
import { useContext } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"

const ImgSkill = () => {
    const { promptSkill, promptDisplay } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    // const { display } = promptDisplay.display

    return (
        <motion.div
        className="
        absolute 
        w-[50px] 
        h-[50px]"
        initial={{
            top: '50%',
            left: '50%',
            translateX: "-50%",
            translateY: "-50%",
            width: 50,
            height: 50
        }}
        animate={{
            top: 150,
            width: 150,
            height: 150,
            transition: {
                duration: 0.2,
                delay: 0.7
            }
        }}
        >
            <Image
                src={skill.src}
                alt="#"
                fill
            />

        </motion.div>
    )
}

export default ImgSkill