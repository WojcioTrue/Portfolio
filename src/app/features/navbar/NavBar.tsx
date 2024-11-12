"use client"
import { SetStateAction, Dispatch } from "react"
import NavBarList from "./NavBarList"
import { useEffect, useState, createContext, useContext } from "react"
import MobileNavBar from "./mobileNavbar/MobileNavBar"
import BackDrop from "./mobileNavbar/backdrop/BackDrop"
import navBarStyles from "./NavBar.module.scss"
import NavBarAnimatedBg from "./NavbarAnimatedBg/NavBarAnimatedBg"
import { categories, ListElement } from "./navItems"
import NavBarIndicatorIcon from "./NavBarIndicatorIcon"
import NavBarTitle from "./NavBarTitle"
import UseDefaultBackground from "./useDefaultBackground"


type ItemPositionType = {
    left: number,
    right: number,
    top: number,
    bottom: number
}

type IndicatorDesktopType = {
    horizontalMid: number,
    verticalMid: number,
}

export const NavBarContext = createContext<{
    toogleMobileNav: {
        displayMenu: boolean,
        setDisplayMenu: Dispatch<SetStateAction<boolean>>
    },
    navBarDesktopPosition: {
        position: ItemPositionType
        setPosition: Dispatch<SetStateAction<ItemPositionType>>
    },
    indicatorDesktop: {
        desktopIPosition: IndicatorDesktopType,
        setIDesktopPosition: Dispatch<SetStateAction<IndicatorDesktopType>>
    },
    navBarMobilePosition: {
        position: ItemPositionType
        setPosition: Dispatch<SetStateAction<ItemPositionType>>
    }
    navBarItems: {
        listElements: ListElement[],
        setListElements: Dispatch<SetStateAction<ListElement[]>>,
        active: boolean,
        setActive: Dispatch<SetStateAction<boolean>>
    }
}>({
    toogleMobileNav: {
        displayMenu: false,
        setDisplayMenu: () => { }
    },
    navBarDesktopPosition: {
        position: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        setPosition: () => { }
    },
    indicatorDesktop: {
        desktopIPosition: {
            horizontalMid: 0,
            verticalMid: 0,
        },
        setIDesktopPosition: () => { }
    },
    navBarMobilePosition: {
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
        setListElements: () => { },
        active: false,
        setActive: () => { }
    }
})

const NavBar = () => {
    // state for context
    const [displayMenu, setDisplayMenu] = useState<boolean>(false)
    //state for changing menu to fixed
    const [fixedMenu, setFixedMenu] = useState<boolean>(false)
    const [navBarDesktopPosition, setNavBarDesktopPosition] = useState<ItemPositionType>(
        {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        })
    const [navBarMobilePosition, setNavBarMobilePosition] = useState<ItemPositionType>(
        {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        })
    const [listElements, setListElements] = useState<ListElement[]>(categories)
    const [iDesktopPosition, setIDesktopPosition] = useState<IndicatorDesktopType>({
        horizontalMid: 0,
        verticalMid: 0,
    })
    const [active, setActive] = useState(false)

    useEffect(() => {
        const isActive = listElements.some(x => x.active === true)
        setActive(isActive)
    }, [listElements, active])

    useEffect(() => {
        if (!active) {
            const indicatorPosition = document.getElementById(`desktop_indicator_default`)!.getBoundingClientRect()
            const horizontalMidPosition = Number((indicatorPosition.left).toFixed(0))

            const verticalMidPosition = Number((indicatorPosition.top).toFixed(0))

            setIDesktopPosition({
                horizontalMid: horizontalMidPosition,
                verticalMid: verticalMidPosition,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const scrolledWindow = () => {
            const scrolled = window.scrollY > 100 ? true : false
            setFixedMenu(scrolled)
        }
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
    UseDefaultBackground()

    return (
        <NavBarContext.Provider value={
            {
                toogleMobileNav: { displayMenu, setDisplayMenu },
                navBarDesktopPosition: {
                    position: navBarDesktopPosition,
                    setPosition: setNavBarDesktopPosition,
                },
                indicatorDesktop: {
                    desktopIPosition: iDesktopPosition,
                    setIDesktopPosition: setIDesktopPosition,
                },
                navBarMobilePosition: {
                    position: navBarMobilePosition,
                    setPosition: setNavBarMobilePosition,
                },
                navBarItems: {
                    listElements: listElements,
                    setListElements,
                    active: active,
                    setActive,
                },
            }}>
            <nav className={
                `${!fixedMenu ? 'absolute' : `!fixed ${navBarStyles.navchange}`} navbar w-full py-3 px-6 overflow-hidden z-10 bg-my-navbarBackground shadow-myshadow`}>
                <span className="flex justify-between items-stretch flex-col md:flex-row max-w-7xl m-auto h-auto z-10 relative">
                    <NavBarTitle />
                    <NavBarList />
                </span>
                <MobileNavBar />
                <BackDrop />
                <NavBarAnimatedBg />
                <NavBarIndicatorIcon />
            </nav>
        </NavBarContext.Provider>

    )
}

export default NavBar