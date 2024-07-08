"use client"
import { SetStateAction, Dispatch } from "react"
import NavBarList from "./NavBarList"
import { useEffect, useState, createContext } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"

type ItemPositionType = {
    left: number,
    right: number,
}

export const NavBarContext = createContext<{
    toogleMobileNav: {
        displayMenu: boolean,
        setDisplayMenu: Dispatch<SetStateAction<boolean>>
    },
    navBarItemPosition: {
        position: ItemPositionType
        setPosition: Dispatch<SetStateAction<ItemPositionType>>
    }
}>({
    toogleMobileNav: {
        displayMenu: false,
        setDisplayMenu: () => { }
    },
    navBarItemPosition: {
        position: {
            left: 0,
            right: 0,
        },
        setPosition: () => { }
    }
})

const NavBar = () => {
    // state for context
    const [displayMenu, setDisplayMenu] = useState<boolean>(false)
    //state for changing menu to fixed
    const [fixedMenu, setFixedMenu] = useState<boolean>(false)
    const [navBarItemPosition, setNavBarItemPosition] = useState<ItemPositionType>(
        {
            left: 0,
            right: 0,
        })
    // check if window passed breakpoint while scrolling
    const scrolledWindow = () => {
        const scrolled = window.scrollY > 100 ? true : false
        setFixedMenu(scrolled)
    }

    useEffect(() => {
        console.log(navBarItemPosition.left)
    }, [navBarItemPosition])

    useEffect(() => {
        window.addEventListener('scroll', scrolledWindow)
        // cleanup
        return () => window.removeEventListener('scroll', scrolledWindow)
    }, [])

    useEffect(() => {
        displayMenu ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    }, [displayMenu])

    return (
        <NavBarContext.Provider value={
            {
                toogleMobileNav: { displayMenu, setDisplayMenu },
                navBarItemPosition: {
                    position: navBarItemPosition,
                    setPosition: setNavBarItemPosition,
                }
            }}>
            <nav className={
                `${fixedMenu && navBarStyles.navchange + ' fixed'} bg-slate-400 navbar w-full py-6 px-4 overflow-hidden relative`}>
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
                <div 
                className={`bg-cyan-300 w-[400px] h-7 absolute top-0 `} 
                style={{ left: `${navBarItemPosition.left + 100}px` }}> 
                </div>
                <MobileNavBar />
                <BackDrop />
            </nav>
        </NavBarContext.Provider>

    )
}

export default NavBar