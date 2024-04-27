"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import "./NavBar.scss"

const NavBar = () => {



    return (
        <nav className=" flex navbar justify-between items-stretch flex-col md:flex-row">
            <div className="flex justify-between w-full bg-slate-400">
                <a className="navbar__brand bg-red-500" href="#">
                    <Image
                        src="/template_logo.svg"
                        alt="logo missing"
                        width="25"
                        height="25"
                        className="inline bg-slate"
                    />
                    <p className="pl-2 inline">Portfolio</p>
                </a>
                <button
                    className="bg-red-500 float-right md:hidden"
                    type="button"
                    aria-controls="dropdown__navbar"
                    aria-expanded="false"
                    aria-label="Toggle navbar"
                >X</button>
            </div>
            <ul className="navbar_list w-full md:w-auto bg-slate-400">
                <li className="md:inline px-3"><a href="#">text</a></li>
                <li className="md:inline px-3"><a href="#">About</a></li>
                <li className="md:inline px-3"><a href="#">Bullshido</a></li>
                <li className="md:inline px-3"><a href="#">contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar