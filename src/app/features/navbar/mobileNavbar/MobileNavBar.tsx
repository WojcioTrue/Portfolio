import React, { useEffect, useRef, useContext } from 'react'
import MobileNavBarList from './mobileNavList/MobileNavBarList'
import './mobieNavBar.scss'
import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import MobileAnimatedBg from './animatedBg/MobileAnimatedBg'
import { HiOutlineXMark } from "react-icons/hi2";
import { mabryProBold } from '@/app/assets/fonts/MabryPro'

const MobileNavBar = () => {
    // reference to mobile navbar
    const navBarRef = useRef<HTMLDivElement | null>(null);
    const { toogleMobileNav } = useContext(NavBarContext)
    const { displayMenu, setDisplayMenu } = toogleMobileNav

    useEffect(() => {
        // event listener checking if click occured inside navBar with current method
        const handleClickOutside = (event: MouseEvent) => {
            (navBarRef.current && !navBarRef.current.contains(event.target as Node)) && setDisplayMenu(false)
        };
        // added event listener to body
        document.body.addEventListener('click', handleClickOutside);
        // cleanup
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setDisplayMenu]);


    return (
        <div ref={navBarRef} className={`fixed z-20 pl-2 overflow-hidden right-0 top-0 pt-[30px] w-full h-full max-w-sm  ${displayMenu ? "display-on" : "display-off"}`}>
            <div className="flex items-center px-3">
                <span className='mobile-logo w-full flex-1'>
                    <h1 className={`text-2xl text-my-purple ${mabryProBold.className}`}>Wojcio_True</h1>
                </span>
                <button
                    className="h-12 w-12"
                    type="button"
                    aria-controls="dropdown__navbar"
                    aria-expanded="false"
                    aria-label="Toggle navbar"
                    onClick={() => setDisplayMenu(prev => !prev)}
                >
                    <HiOutlineXMark size={'25px'}/>
                </button>
                
            </div>
            <MobileNavBarList />
            <MobileAnimatedBg />
        </div>
    )
}

export default MobileNavBar