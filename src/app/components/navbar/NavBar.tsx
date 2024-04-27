"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import "./NavBar.scss"

const NavBar = () => {



    return (
        <nav className=" flex navbar justify-between items-stretch flex-col md:flex-row">
            <div className="flex justify-between w-full bg-slate-400 items-center">
                <a className="navbar__brand bg-red-500 flex" href="#">
                    <Image
                        src="/template_logo.svg"
                        alt="Logo"
                        width="20"
                        height="20"
                        className="inline bg-slate m-auto"
                    />
                    <p className="pl-2 inline my-auto">Portfolio</p>
                </a>
                <button
                    className="bg-red-500 float-right md:hidden px-2"
                    type="button"
                    aria-controls="dropdown__navbar"
                    aria-expanded="false"
                    aria-label="Toggle navbar"
                >X</button>
            </div>
            <ul className="navbar_list w-full md:w-auto bg-slate-400 flex flex-col md:flex-row  md:items-center">
                <li className="md:inline px-3"><a href="#">text</a></li>
                <li className="md:inline px-3"><a href="#">About</a></li>
                <li className="md:inline px-3"><a href="#">Bullshido</a></li>
                <li className="md:inline px-3"><a href="#">contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar