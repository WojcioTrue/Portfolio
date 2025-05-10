import { motion } from "framer-motion"
import Image from "next/image"
import { useContext, useEffect } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"

const ImgSkill = () => {
    const { promptSkill, dropTargetProps } = useContext(SkillPromptContext)
    const { skill } = promptSkill
    const { height } = dropTargetProps.position
    const initMiddle = (height / 2) - (50 / 2)


    return (
        <div
            className="relative w-[100%] h-[150px]"

        >
            <motion.div
                className="absolute"
                initial={{
                    top: initMiddle,
                    left: '50%',
                    translateX: "-50%",
                    width: 50,
                    height: 50
                }}
                animate={{
                    top: initMiddle + 60,
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