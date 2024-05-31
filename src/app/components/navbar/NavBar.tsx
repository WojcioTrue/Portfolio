"use client"
import Image from "next/image"
import NavBarList from "./NavBarList"
import { useEffect, useState } from "react"
import MobileNavBarList from "./mobileNavbar/MobileNavBarList"

const NavBar = () => {
    const [displayMenu, setDisplayMenu] = useState(false)

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
        console.log(displayMenu)
    }

    return (
        <nav className=" flex navbar justify-between items-stretch flex-col md:flex-row">
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
            <MobileNavBarList toggleMenu={toggleMenu}/>
        </nav>
    )
}

export default NavBar