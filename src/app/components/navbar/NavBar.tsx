"use client"
import Image from "next/image"
import NavBarList from "./NavBarList"
import { useState } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"

const NavBar = () => {
    const [displayMenu, setDisplayMenu] = useState(false)

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <nav className=" flex navbar justify-between items-stretch flex-col md:flex-row ">
            <div className="flex justify-between w-full bg-slate-400 items-center">
                <a className="navbar__brand bg-red-500 flex" href="#">
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
                    className="bg-red-500 float-right md:hidden px-2"
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