import React, { useContext } from 'react'
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import { motion } from 'framer-motion'
import { HiOutlineXMark } from 'react-icons/hi2'

const NavBarToogleButton = () => {
    const { toogleMobileNav } = useContext(NavBarContext)
    const { displayMenu,setDisplayMenu } = toogleMobileNav
    return (
        <motion.button
            animate={{
                rotate: displayMenu ? 90 : 0,
            }}
            transition={{
                delay: 0.2
            }}
            className="h-12 w-12 md:hidden flex justify-center items-center"
            type="button"
            aria-controls="dropdown__navbar"
            aria-expanded="false"
            aria-label="Toggle navbar"
            onClick={() => setDisplayMenu(prev => !prev)}
        >
            <HiOutlineXMark size={'25px'} />
        </motion.button>
    )
}

export default NavBarToogleButton