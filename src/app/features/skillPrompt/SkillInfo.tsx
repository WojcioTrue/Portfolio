'use client'
import { useContext, useEffect, useState } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"
import ImgSkill from "./ImgSkill"
import SkillText from "./SkillText"

const SkillInfo = () => {
  const { promptPosition, promptDisplay } = useContext(SkillPromptContext)

  const [skillProperties, setSkillProperties] = useState({
    coords: {
      x: 0,
      y: 0,
    },
    dimensions: {
      width: 0,
      height: 0,
    }
  })
  const { display } = promptDisplay
  const { top, left } = promptPosition.position


  // i need to count width by myself, because for some reason framer motion doesnt support changing parameters. When I make transition from pixel to percentage i get bugs
  useEffect(() => {
    const getSkillProperties = () => {
      const middleX = window.innerWidth / 2
      const middleY = window.innerHeight / 2
      const elementWidth = () => {
        if (window.innerWidth >= 500) {
          return 450
        }
        if (
          (window.innerWidth < 500) &&
          (window.innerWidth >= 450)) {

          return (500 - (500 - window.innerWidth)) - 40
        } else {
          return window.innerWidth - 40
        }
      }
      const elementheight = window.innerHeight - (100 + 50)
      return {
        coords: {
          x: middleX,
          y: middleY,
        },
        dimensions: {
          width: elementWidth(),
          height: elementheight,
        }
      }
    }

    window.addEventListener('resize', () => {
      setSkillProperties(getSkillProperties())
    })
    setSkillProperties(getSkillProperties())
    return () => {
      window.removeEventListener('resize', () => {
        setSkillProperties(getSkillProperties())
      })
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {display &&
        <motion.div

          className="
          absolute 
          rounded-[7px]
            "
          initial={{
            left: left,
            top: top,
            width: 250,
            height: 120,
            opacity: 0,
            background: "rgb(250 245 255)"
          }}


          animate={{
            top: 100,
            left: skillProperties.coords.x,
            width: skillProperties.dimensions.width,
            height: skillProperties.dimensions.height,
            opacity: 1,
            translateX: '-50%',
            background: 'linear-gradient(45deg, rgb(191, 64, 191) 20%, rgb(127, 0, 255) 75%',
            transition: {
              top: {
                type: 'spring',
                delay: 0.3,
                duration: 0.5
              },
              left: {
                type: 'spring',
                delay: 0.3,
                duration: 0.5
              },
              width: {
                type: 'spring',
                delay: 0.6,
                duration: 0.3
              },
              height: {
                type: 'spring',
                delay: 0.7,
                duration: 0.5
              },
              translateX: {
                type: 'spring',
                delay: 0.3,
                duration: 0.5
              },

            }
          }}
          exit={{
            scale: 1.2,
            opacity: 0
          }}
        >
          <ImgSkill />
          <SkillText/>
        </motion.div>}

    </AnimatePresence>

  )
}

export default SkillInfo