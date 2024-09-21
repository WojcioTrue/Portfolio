"use client"
import { SetStateAction, Dispatch } from "react"
import NavBarList from "./NavBarList"
import { useEffect, useState, createContext, useContext } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"
import NavBarAnimatedBg from "./NavbarAnimatedBg/NavBarAnimatedBg"
import { categories, ListElement } from "./navItems"

type ItemPositionType = {
    left: number,
    right: number,
    top: number,
    bottom: number
}

export const NavBarContext = createContext<{
    toogleMobileNav: {
        displayMenu: boolean,
        setDisplayMenu: Dispatch<SetStateAction<boolean>>
    },
    navBarItemPosition: {
        position: ItemPositionType
        setPosition: Dispatch<SetStateAction<ItemPositionType>>
    },
    navBarItems: {
        listElements: ListElement[],
        setListElements: Dispatch<SetStateAction<ListElement[]>>
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
            top: 0,
            bottom: 0
        },
        setPosition: () => { }
    },
    navBarItems: {
        listElements: categories,
        setListElements: () => { }
    }
})

const NavBar = () => {
    // state for context
    const [displayMenu, setDisplayMenu] = useState<boolean>(false)
    //state for changing menu to fixed
    const { navBarItems } = useContext(NavBarContext)
    const [fixedMenu, setFixedMenu] = useState<boolean>(false)
    const [navBarItemPosition, setNavBarItemPosition] = useState<ItemPositionType>(
        {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        })
    const [listElements, setListElements] = useState<ListElement[]>(categories)


    // check if window passed breakpoint while scrolling
    const scrolledWindow = () => {
        const scrolled = window.scrollY > 100 ? true : false
        setFixedMenu(scrolled)
    }

    useEffect(() => {
        //get initial position after page is loaded/refreshed
        scrolledWindow()
        window.addEventListener('scroll', scrolledWindow)
        // cleanup
        return () => {
            window.removeEventListener('scroll', scrolledWindow)
        }
    }, [])

    useEffect(() => {
        displayMenu ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden')
    }, [displayMenu])

    // default value for background when page is loaded
    useEffect(() => {
        const navBarListElements = document.getElementsByClassName("desktop-nav-bar-element");
        const isActive = navBarItems.listElements.some((x) => Boolean(x.active) === true)
        // check if there are active elements
        if (navBarListElements.length > 0 && isActive) {
            const getActiveSection = navBarItems.listElements.filter(x => x.active === true)
            const activeSectionName = `navbar_li_${getActiveSection[0].section}`
            const firstLiElement = document.getElementById(activeSectionName)!;

            const elementWidth = firstLiElement.offsetWidth
            // positions for background borders
            const leftValue = Number(firstLiElement.getBoundingClientRect().left.toFixed(0)) + elementWidth;
            const rightValue = document.body.clientWidth - Number(firstLiElement.getBoundingClientRect().right.toFixed(0)) + elementWidth;
            const topValue = Number(firstLiElement.getBoundingClientRect().top.toFixed(0))
            const bottomValue = Number(firstLiElement.getBoundingClientRect().bottom.toFixed(0))

            setNavBarItemPosition({
                left: leftValue,
                right: rightValue,
                top: topValue,
                bottom: bottomValue
            })
        }
    }, [navBarItems.listElements])

    return (
        <NavBarContext.Provider value={
            {
                toogleMobileNav: { displayMenu, setDisplayMenu },
                navBarItemPosition: {
                    position: navBarItemPosition,
                    setPosition: setNavBarItemPosition,
                },
                navBarItems: {
                    listElements: listElements,
                    setListElements,
                },
            }}>
            <nav className={
                `${!fixedMenu ? 'absolute' : `!fixed ${navBarStyles.navchange}`} navbar w-full py-6 px-4 overflow-hidden z-10`}>
                <span className="flex justify-between items-stretch flex-col md:flex-row max-w-7xl m-auto h-auto z-10 relative">
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
                <NavBarAnimatedBg />
            </nav>
        </NavBarContext.Provider>

    )
}

export default NavBar