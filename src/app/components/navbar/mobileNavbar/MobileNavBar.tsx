import React, { useEffect, useRef, useContext } from 'react'
import MobileNavBarList from './MobileNavBarList'
import './mobieNavBar.scss'
import { NavBarContext } from '../NavBar'

const MobileNavBar = () => {
    // reference to mobile navbar
    const navBarRef = useRef<HTMLDivElement | null>(null);
    const {toogleMobileNav} = useContext(NavBarContext)

    useEffect(() => {
        // event listener checking if click occured inside navBar with current method
        const handleClickOutside = (event: MouseEvent) => {
            (navBarRef.current && !navBarRef.current.contains(event.target as Node)) && toogleMobileNav.setDisplayMenu(false)
        };
        // added event listener to body
        document.body.addEventListener('click', handleClickOutside);
        // cleanup
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toogleMobileNav.setDisplayMenu]);


    return (
        <div ref={navBarRef} className={`fixed z-20 overflow-hidden right-0 top-0 pt-[30px] pr-[3px] w-full h-full max-w-sm  ${toogleMobileNav.displayMenu ? "display-on" : "display-off"} bg-white`}>
            <div className=' flex items-center p-3'>
                <span className='mobile-logo w-full flex-1'>
                    <h1 className='text-2xl font-semibold'>WOJCIO_TRUE</h1>
                </span>
                <button
                    className="h-8 w-8 border-red-400 border-2"
                    type="button"
                    aria-controls="dropdown__navbar"
                    aria-expanded="false"
                    aria-label="Toggle navbar"
                    onClick={() => toogleMobileNav.setDisplayMenu(prev => !prev)}
                >X</button>
            </div>
            <MobileNavBarList />
        </div>
    )
}

export default MobileNavBar