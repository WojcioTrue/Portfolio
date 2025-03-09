import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { TechStackContext } from '../../../techStackContext/TechStackContext'

const TargetDescripton = () => {
    const { isDragged } = useContext(TechStackContext)
    const dragged = isDragged.dragged

  return (
    <div className="relative mb-10 w-full">
    <motion.p
        initial={{
            opacity: 1,
        }}
        animate={{
            opacity: !dragged ? 1 : 0,
            transition: {
                duration: 0.2,
                delay: !dragged ? 0.3 : 0
            }
        }}
        className={`
            absolute 
            left-[50%] 
            -translate-x-[50%]
            block 
            m-auto 
            w-[80%] t
            text-center 
            text-my-gray 
            select-none text-wrap`}>
                Grab some Tech-Icon...
        </motion.p>
       <motion.p
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: !dragged ? 0 : 1,
            transition: {
                duration: 0.2,
                delay: !dragged ? 0 : 0.3
            }
        }}
        className={`
            absolute 
            left-[50%] 
            -translate-x-[50%]
            block 
            m-auto 
            w-[80%] t
            text-center 
            text-my-gray 
            select-none text-wrap`}>
                ...and drop it below !
        </motion.p>

    </div>
  )
}

export default TargetDescripton