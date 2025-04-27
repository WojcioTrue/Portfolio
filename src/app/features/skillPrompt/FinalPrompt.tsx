import { useContext, useEffect, useState } from "react"
import { SkillPromptContext } from "./SkillPromptContextProvider"
import { AnimatePresence, motion } from "framer-motion"
import SkillText from "./SkillText"
import ImgSkill from "./ImgSkill"

const FinalPrompt = () => {
    const { promptProps, promptDisplay } = useContext(SkillPromptContext)

    const { display } = promptDisplay
    const [valuesOn, setValuesOn] = useState(false)
    const { top, bottom, left, right, height, width } = promptProps.position

    useEffect(() => {
        if ((height !== 0) && (width !== 0)) {
            setValuesOn(true)
        }
    }, [height, width])

    return (
        <AnimatePresence mode="wait">
            {(display && valuesOn) &&
                <motion.div
                    layout
                    className="
                        absolute 
                        rounded-[7px]
                        overflow-hidden
                            "
                    style={{
                        width: width,
                        height: height,
                        opacity: 1,
                        left: left,
                        }}
                >
            <ImgSkill />
            <SkillText />
            <SkillText />
        </motion.div>}

        </AnimatePresence >
    )
}


// initial={{
//     left: left + 10,
//     top: top,



//   animate={{
//     top: 80,
//     left: skillProperties.coords.x,
//     width: skillProperties.dimensions.width,
//     height: 300,
//     opacity: 1,
//     translateX: '-50%',
//     background: 'linear-gradient(45deg, rgb(191, 64, 191) 20%, rgb(127, 0, 255) 75%',
//     transition: {
//       top: {
//         type: 'spring',
//         delay: 0.3,
//         duration: 0.5
//       },
//       left: {
//         type: 'spring',
//         delay: 0.3,
//         duration: 0.5
//       },
//       width: {
//         type: 'spring',
//         delay: 0.6,
//         duration: 0.3
//       },
//       height: {
//         type: 'spring',
//         delay: 0.7,
//         duration: 0.5
//       },
//       translateX: {
//         type: 'spring',
//         delay: 0.3,
//         duration: 0.5
//       },

//     }
//   }}
//   exit={{
//     scale: 1.2,
//     opacity: 0
//   }}

// i need to count width by myself, because for some reason framer motion doesnt support changing parameters. When I make transition from pixel to percentage i get bugs
// useEffect(() => {
//   const getSkillProperties = () => {
//     const middleX = window.innerWidth / 2
//     const middleY = window.innerHeight / 2
//     const elementWidth = () => {
//       if (window.innerWidth >= 500) {
//         return 450
//       }
//       if (
//         (window.innerWidth < 500) &&
//         (window.innerWidth >= 450)) {

//         return (500 - (500 - window.innerWidth)) - 40
//       } else {
//         return window.innerWidth - 40
//       }
//     }
//     const elementheight = window.innerHeight - (100 + 50)
//     return {
//       coords: {
//         x: middleX,
//         y: middleY,
//       },
//       dimensions: {
//         width: elementWidth(),
//         height: 300,
//       }
//     }
//   }

//   window.addEventListener('resize', () => {
//     setSkillProperties(getSkillProperties())
//   })
//   setSkillProperties(getSkillProperties())
//   return () => {
//     window.removeEventListener('resize', () => {
//       setSkillProperties(getSkillProperties())
//     })
//   }
// }, [])


// const contentHeight = () => {
//     if (document.getElementById('skill-text') !== null) {
//       return document.getElementById('skill-text')!.offsetHeight
//     }
//   }
export default FinalPrompt