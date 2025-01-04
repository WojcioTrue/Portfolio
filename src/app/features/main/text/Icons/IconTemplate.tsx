import { motion } from "framer-motion"
import Image from "next/image"

type IconTemplateType = {
    name: string
}

const IconTemplate = ({name} : IconTemplateType) => {
    return (
        <motion.div 
        className="bg-gradient-to-tr from-my-gradient1 to-my-gradient2 opacity-70 w-[40px] h-[40px] shadow-myshadow rounded-lg p-[7px]"
        initial={{
            opacity: 55
          }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.8, 0.4, 0.8]
          }}
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
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