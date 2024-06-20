"use client"
import { SetStateAction, Dispatch } from "react"
import NavBarList from "./NavBarList"
import { useEffect, useState, createContext } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"

export const DisplayMenuContext = createContext<{ displayMenu: boolean, setDisplayMenu: Dispatch<SetStateAction<boolean>> }>({ displayMenu: false, setDisplayMenu: () => { } })

const NavBar = () => {
    // state for context
    const [displayMenu, setDisplayMenu] = useState<boolean>(false)
    //state for changing menu to fixed
    const [styleFixed, setStyleFixed] = useState(false)

    // check if window passed breakpoint while scrolling
    const scrolledWindow = () => {
        console.log(navBarStyles)
        const scrolled = window.scrollY > 100 ? true : false
        setStyleFixed(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolledWindow)
        // cleanup
        return () => window.removeEventListener('scroll', scrolledWindow)
    }, [])

    useEffect(() => {
        displayMenu ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    }, [displayMenu])

    return (
        <DisplayMenuContext.Provider value={{ displayMenu, setDisplayMenu }}>
            <nav className={`
                ${styleFixed && navBarStyles.navchange} 
                ${styleFixed && 'fixed'}
                 bg-slate-400 navbar w-full py-6 px-4 `}>
                <span className="flex justify-between items-stretch flex-col md:flex-row max-w-7xl m-auto h-auto">
                    <div className="flex justify-between w-full items-center">
                        <a className="navbar__brand flex" href="#">
                            <p className="px-2 py-4 inline my-auto text-3xl font-medium">WOJCIO_TRUE</p>
                        </a>
                        <button
                            className="float-right md:hidden px-2 border-red-400 border-2"
                            type="button"
                            aria-controls="dropdown__navbar"
                            aria-expanded="false"
                            aria-label="Toggle navbar"
                            onClick={() => setDisplayMenu(prev => !prev)}
                        >X</button>
                    </div>
                    <NavBarList />
                </span>
                <MobileNavBar />
                <BackDrop />
            </nav>
        </DisplayMenuContext.Provider>

    )
}

export default NavBar