import { useContext, useEffect, useState } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"
import SkillText from "./SkillText"
import ImgSkill from "./ImgSkill"

const FinalPrompt = () => {
    const { promptProps, promptDisplay, dropTargetProps, startResize } = useContext(SkillPromptContext)
    const { display } = promptDisplay
    const { resize } = startResize
    const [valuesOn, setValuesOn] = useState(false)
    const { left, width, height } = promptProps.position
    const {
        height: initHeight,
        width: initWidth,
        top: initTop,
        left: initLeft,
    } = dropTargetProps.position

    useEffect(() => {
        if ((height !== undefined) && (width !== undefined)) {
            setValuesOn(true)
        }
    }, [height, width])

    return (
        <AnimatePresence mode="wait">
            {(display && valuesOn) &&
                <motion.div
                    initial={{
                        width: initWidth,
                        height: initHeight,
                        top: initTop,
                        left: initLeft,
                        background: 'linear-gradient(45deg, rgb(191, 64, 191) 20%, rgb(127, 0, 255) 75%'
                    }}
                    animate={{
                        width,
                        height,
                        left,
                        top : 80, // top is actually just padding from parent node value
                        transition: {
                            duration: resize ? 0 : 0.3,
                            delay: resize ? 0 : 0.25,
                            height: {
                                delay: resize ? 0 : 0.5
                            }
                        }
                    }}
                    className="
                        absolute 
                        rounded-[7px]
                        overflow-hidden
                            "
                >
                    <ImgSkill />
                    <SkillText />
                </motion.div>}

        </AnimatePresence >
    )
}


export default FinalPrompt