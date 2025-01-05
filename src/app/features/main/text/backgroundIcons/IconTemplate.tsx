import { motion } from "framer-motion"
import Image from "next/image"
import { HoverContext } from "../MainText"
import { useContext } from "react"

type IconTemplateType = {
  name: string,
  left: number,
  top: number,
  id: number
}

const IconTemplate = ({ name, left, top, id }: IconTemplateType) => {
  const { hover } = useContext(HoverContext)

  const delayValue = ((id / 10) * 2)
  const leftValue = id === 9 ? `calc(50% - 85px)` : id === 8 ? `calc(50% + 45px)` : `calc(50% - 20px)`
  const topValue = (id === 9 || id === 8) ? `${(7 * 60) - 60}px` : `${(id * 60)}px`

  return (
    <motion.div
      layout
      className={`absolute bg-gradient-to-tr from-my-gradient1 to-my-gradient2 opacity-70 w-[40px] h-[40px] shadow-myshadow rounded-lg p-[7px] -z-10`}
      style={{
        left: hover ? leftValue : `${left}%`,
        top: hover ? topValue : `${top}%`
      }}
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.30, 0.05, 0.30],
        y: [0, 5, -5, 0]
      }}
      transition={{
        duration: 3,
        ease: "circOut",
        repeat: Infinity,
        delay: delayValue,
        layout: {
          duration: 0.3,
          type: "spring",
          stiffness: 700,
          damping: 30
        }
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