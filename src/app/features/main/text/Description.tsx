import { mabryProLight } from '@/app/assets/fonts/MabryPro';
import { motion } from 'framer-motion';

const Description = () => {
  return (
    <motion.p
            initial={{
              opacity: 0,
              translateX: '-10px'
            }}
            animate={{
              opacity: 1,
              translateX: '0px'
            }}
            transition={{
              duration: 0.3,
              delay: 0.25,
              type: "Tween"
            }} className={`text-[16px] w-full text-my-gray mb-4 sm:text-[24px] text-center ${mabryProLight.className}`}>Work in progress... be patient :)</motion.p>
  )
}

export default Description