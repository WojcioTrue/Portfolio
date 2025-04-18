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
            className="relative bg-red-500 w-full h-[200px]"
            // initial={{
            //     top: 20,
            //     left: '50%',
            //     translateX: "-50%",
            //     width: 50,
            //     height: 50
            // }}
            // animate={{
            //     top: 70,
            //     width: 100,
            //     height: 100,
            //     transition: {
            //         duration: 0.2,
            //         delay: 0.7
            //     }
            // }}
        >
            {/* <Image
                src={skill.src}
                alt="#"
                fill
                sizes="100%"
            /> */}

        </motion.div>
    )
}

export default ImgSkill