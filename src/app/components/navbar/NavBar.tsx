"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

const NavBar = () => {
    const [toggleDisplay, setToggleDisplay] = useState(false)

    const toggleClick = () => {
        setToggleDisplay(!toggleDisplay)
    }

    const afterResize = () => {
        window.innerWidth > 768 && setToggleDisplay(false)
    }

    useEffect(() => {
        window.addEventListener('resize', afterResize)
        return () => window.removeEventListener("resize", afterResize);
    }, [])

    return (
        <nav className="navbar bg-slate-400 md:flex justify-between mr-2 md:mr-0 rounded-br-md md:rounded-none">
            <a className="navbar__brand bg-red-500 w-fit p-1 inline-block">
                <Image
                    src="/template_logo.svg"
                    alt="logo missing"
                    width="25"
                    height="25"
                    className="inline"
                />
                <p className="pl-2 inline">Portfolio</p>
            </a>
            <button
                className="bg-yellow-400 p-1 md:hidden inline-block float-right"
                type="button"
                aria-controls="dropdown__navbar"
                aria-expanded="false"
                aria-label="Toggle navbar"
                onClick={() => toggleClick()}
            >X</button>
            <div className={`navbar__collapse bg-fuchsia-500 ${!toggleDisplay ? ' hidden' : ''} md:block`} id="dropdown__navbar">
                <ul className="md:flex">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar