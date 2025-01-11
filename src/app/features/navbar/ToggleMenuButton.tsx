import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from 'framer-motion'
import { SetStateAction, Dispatch } from "react"
import { useContext } from "react";
import { BlurPage } from "./mobileNavbar/backdrop/BackDropContext";


type ToggleMenuButtonType = {
    displayMenu: boolean,
    onlyMobile?: boolean,
    setDisplayMenu: Dispatch<SetStateAction<boolean>>
}

const ToggleMenuButton = ({ displayMenu, onlyMobile, setDisplayMenu }: ToggleMenuButtonType) => {
    const { blurPage } = useContext(BlurPage)
    const {setIsBlur} = blurPage
    return (
        <motion.button
            animate={{
                rotate: displayMenu ? 90 : 0,
            }}
            transition={{
                delay: 0.2
            }}
            className={`h-12 w-12 ${onlyMobile ? "md:hidden " : ""}flex justify-center items-center`}
            type="button"
            aria-controls="dropdown__navbar"
            aria-expanded="false"
            aria-label="Toggle navbar"
            onClick={() => {
                setDisplayMenu(prev => !prev)
                setIsBlur(prev => !prev)
            }}
        >
            <HiOutlineXMark size={'25px'} color="rgb(116, 31, 245)"/>
        </motion.button>
    )
}

export default ToggleMenuButton