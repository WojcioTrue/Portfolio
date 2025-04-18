import { motion } from "framer-motion"
import Image from "next/image"
import { useContext } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"

const ImgSkill = () => {
    const { promptSkill, promptDisplay } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    // const { display } = promptDisplay.display

    return (
        <div
            className="relative bg-red-500 w-[100%] h-[150px]"

        >
            <motion.div
                className="bg-blue-500 absolute"
                initial={{
                    top: '0%',
                    left: '50%',
                    translateX: "-50%",
                    width: 50,
                    height: 50
                }}
                animate={{
                    top: '50%',
                    translateY: '-50%',
                    width: 100,
                    height: 100,
                    transition: {
                        duration: 0.2,
                        delay: 0.7
                    }
                }}>
                <Image
                    src={skill.src}
                    alt="#"
                    fill
                />
            </motion.div>


        </div >
    )
}

export default ImgSkill