"use client"
import Image from "next/image"
import NavBarList from "./NavBarList"
import { useEffect, useState } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"

const NavBar = () => {
    const [displayMenu, setDisplayMenu] = useState(false)

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    useEffect(() => {
        displayMenu ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    },[displayMenu])

    return (
        <nav className="navbar bg-slate-400 flex justify-between items-stretch flex-col md:flex-row w-full">
            <div className="flex justify-between w-full items-center">
                <a className="navbar__brand flex" href="#">
                    <Image
                        priority={true}
                        src="/template_logo.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        className="inline bg-slate m-auto"
                    />
                    <p className="px-2 inline my-auto">Portfolio</p>
                </a>
                <button
                    className="float-right md:hidden px-2"
                    type="button"
                    aria-controls="dropdown__navbar"
                    aria-expanded="false"
                    aria-label="Toggle navbar"
                    onClick={() => toggleMenu()}
                >X</button>
            </div>
            <NavBarList />
            <MobileNavBar toggleMenu={toggleMenu} displayMenu={displayMenu}/>
        {displayMenu && <BackDrop/>}
        </nav>
    )
}

export default NavBar