import { useContext } from "react"
import SkillButtons from "../buttons/ButtonsWrapper"
import { TechStackContext } from "../../techStackContext/TechStackContext"
import { motion } from "framer-motion"

const DropTarget = () => {
    const { dropTarget } = useContext(TechStackContext)

    return (
        <div className=' 
            w-[250px] 
            rounded-lg 
            pb-3
            z-10'
        >
            <p className='block m-auto w-[80%] text-center text-my-gray select-none text-wrap'>Drop icon below :)</p>
            <div ref={dropTarget} id="drag-target"
                className={`
                    relative
                    h-[120px] 
                    m-auto 
                    mb-2  
                    border-my-lightGray 
                    border-[1px]
                    rounded-[7px] 
                    shadow-myshadow
                    bg-white
                   `
                }>
                <motion.div className='
                    absolute
                    top-[50%] 
                    left-[50%] 
                    rounded-[7px] 
                    bg-gradient-to-tr 
                    from-my-gradient2 
                    to-my-gradient1 
                    w-full 
                    h-full
                    -z-10
                    '
                    initial={{
                        translateY: '-50%',
                        translateX: '-50%',
                        opacity: 0,
                    }}
                    animate={{
                        scale: [1, 1.02, 1.04],
                        opacity: [0, 0.16, 0],
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                </motion.div>
                <motion.div className='
                    absolute
                    top-[50%] 
                    left-[50%] 
                    rounded-[7px] 
                    bg-gradient-to-tr 
                    from-my-gradient2 
                    to-my-gradient1 
                    w-full 
                    h-full
                    -z-10
                    '
                    initial={{
                        translateY: '-50%',
                        translateX: '-50%',
                        opacity: 0,
                    }}
                    animate={{
                        scale: [1, 1.04, 1.08],
                        opacity: [0, 0.12, 0],
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                </motion.div>
                <motion.div className='
                    absolute
                    top-[50%] 
                    left-[50%] 
                    rounded-[7px] 
                    bg-gradient-to-tr 
                    from-my-gradient2 
                    to-my-gradient1 
                    w-full 
                    h-full
                    -z-10
                    '
                    initial={{
                        translateY: '-50%',
                        translateX: '-50%',
                        opacity: 0,
                    }}
                    animate={{
                        scale: [1, 1.08, 1.12],
                        opacity: [0, 0.08, 0],
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                </motion.div>
            </div>
            <SkillButtons />
        </div>
    )
}

export default DropTarget