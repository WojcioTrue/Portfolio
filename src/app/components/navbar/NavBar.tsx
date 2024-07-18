"use client"
import { SetStateAction, Dispatch } from "react"
import NavBarList from "./NavBarList"
import { useEffect, useState, createContext } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"
import NavBarAnimatedBg from "./NavBarAnimatedBg/NavBarAnimatedBg"

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
        window.addEventListener('scroll', scrolledWindow)
        // cleanup
        return () => window.removeEventListener('scroll', scrolledWindow)
    }, [])

    useEffect(() => {
        displayMenu ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    }, [displayMenu])


    // default value for background Elements
    useEffect(() => {
        const navBarListElements = document.getElementsByClassName("desktop-nav-bar-element");
        if (navBarListElements.length > 0) {
            const firstLiElement = navBarListElements[0] as HTMLLIElement;
            const widthOfElement = firstLiElement.offsetWidth
            const leftValue = Number(firstLiElement.getBoundingClientRect().left.toFixed(0)) + (widthOfElement / 2);
            const rightValue = document.body.clientWidth - Number(firstLiElement.getBoundingClientRect().right.toFixed(0)) + (widthOfElement / 2);
            setNavBarItemPosition({
                left: leftValue,
                right: rightValue
            })
        }
    }, [])

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
                `relative ${fixedMenu && navBarStyles.navchange + ' !fixed'}  bg-slate-400 navbar w-full py-6 px-4 overflow-hidden`}>
                <span className="flex justify-between items-stretch flex-col md:flex-row max-w-7xl m-auto h-auto">
                    <div className="flex justify-between w-full items-center">
                        <a className="navbar__brand flex z-20" href="#">
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
                <NavBarAnimatedBg />
            </nav>
        </NavBarContext.Provider>

    )
}

export default NavBar