"use client"
import { SetStateAction, Dispatch } from "react"
import NavBarList from "./NavBarList"
import { useEffect, useState, createContext } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"

type ItemPositionType = {
    x: number,
    y: number,
}

export const NavBarContext = createContext<{
    toogleMobileNav: {
        displayMenu: boolean,
        setDisplayMenu: Dispatch<SetStateAction<boolean>>
    },
    navBarItemPosition: {
        values: ItemPositionType
        setPosition: Dispatch<SetStateAction<ItemPositionType>>
    }
}>({
    toogleMobileNav: {
        displayMenu: false,
        setDisplayMenu: () => { }
    },
    navBarItemPosition: {
        values: {
            x: 0,
            y: 0,
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
            x: 0,
            y: 0,
        })
    // check if window passed breakpoint while scrolling
    const scrolledWindow = () => {
        const scrolled = window.scrollY > 100 ? true : false
        setFixedMenu(scrolled)
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
        <NavBarContext.Provider value={
            {
                toogleMobileNav: { displayMenu, setDisplayMenu },
                navBarItemPosition: {
                    values: navBarItemPosition,
                    setPosition: setNavBarItemPosition,
                }
            }}>
            <nav className={
                `${fixedMenu && navBarStyles.navchange + ' fixed'} bg-slate-400 navbar w-full py-6 px-4 overflow-hidden`}>
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
                {/* <div id="left-side" className='bg-green-400 w-full h-[116px] absolute top-0 right-[700px]'></div>
                <div id="right-side" className='bg-green-400 w-full h-[116px] absolute top-0 left-[700px]'></div> */}
            </nav>
        </NavBarContext.Provider>

    )
}

export default NavBar