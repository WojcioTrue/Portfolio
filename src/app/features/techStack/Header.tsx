import { mabryProBold } from '@/app/assets/fonts/MabryPro'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Header = () => {
    const ref = useRef(null)

    return (
        <div ref={ref}>
            <h1 className={`text-[42px] sm:text-[50px] md:text-[60px] xl:text-[68px] 2xl:text-[72px] text-center pt-10 ${mabryProBold.className}`}>
                <motion.span initial={{
                    opacity: 0,
                    y: 20
                }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.4,
                        duration: 0.4
                    }}
                    viewport={{
                        once: true,
                        margin: '-250px',
                        root: ref
                    }}>Technology </motion.span>
                <motion.span initial={{
                    opacity: 0,
                    y: 20
                }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.4
                    }}
                    viewport={{
                        once: true,
                        margin: '-250px',
                        root: ref
                    }}>stack</motion.span>
                <motion.span initial={{
                    opacity: 0,
                    y: 20
                }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 2
                    }}
                    viewport={{
                        once: true,
                        margin: '-250px',
                        root: ref
                    }}>{`.`}</motion.span></h1>
        </div>

    )
}

export default Header