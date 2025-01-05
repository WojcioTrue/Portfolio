import { motion } from "framer-motion"
import Image from "next/image"

type IconTemplateType = {
    name: string,
    left: number,
    top:  number,
    id: number
}

const IconTemplate = ({name, left, top, id} : IconTemplateType) => {
    let delayValue = ((id/10) * 2)
    return (
        <motion.div 
        className={`absolute bg-gradient-to-tr from-my-gradient1 to-my-gradient2 opacity-70 w-[40px] h-[40px] shadow-myshadow rounded-lg p-[7px] -z-10`}
        style={{
          left: `${left}%`,
          top: `${top}%`
        }}
        initial={{
            opacity: 55
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.35, 0.05, 0.35],
            y: [0,5,-5,0]
          }}
          transition={{
            duration: 3,
            ease: "circOut",
            repeat: Infinity,
            delay: delayValue
          }}
        >
            <Image
                alt="#"
                width={50}
                height={50}
                src={`/images/${name}.png`}
            />
        </motion.div>
    )
}

export default IconTemplate