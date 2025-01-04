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
            }} className={`text-[16px] text-my-gray mb-4 sm:text-[24px] text-center ${mabryProLight.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</motion.p>
  )
}

export default Description