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
      }} className={`w-full text-header-desc-default
    sm:text-header-desc-sm-default tracking-description text-my-gray pb-6 text-center ${mabryProLight.className}`}>Work in progress... be patient :)</motion.p>
  )
}

export default Description