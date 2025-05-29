import { mabryProBold } from '@/app/assets/fonts/MabryPro'
import { motion } from 'framer-motion'

const Header = () => {
   
    return (
        <div className={`flex justify-center text-header-my-default 
        sm:text-header-my-sm 
        md:text-header-my-md 
        xl:text-header-my-xl 
        2xl:text-header-my-2xl 
        text-center 
        tracking-header 
        ${mabryProBold.className}`}>
            <motion.h1
                className='mr-5'
                initial={{
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
                    margin: '0px 0px -100px 0px'
                }}
            >
                {"Technology "}
            </motion.h1>
            <motion.h1
                initial={{
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
                    margin: '0px 0px -100px 0px'
                }}
            >
                {"stack"}
            </motion.h1>
            <motion.h1
                initial={{
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
                    margin: '0px 0px -100px 0px'
                }}>
                {"."}
            </motion.h1>
        </div>
    )
}

export default Header