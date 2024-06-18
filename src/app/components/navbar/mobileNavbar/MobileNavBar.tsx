import React, { useEffect, useRef } from 'react'
import MobileNavBarList from './MobileNavBarList'
import './mobieNavBar.scss'

type MobileNavBarType = {
    toggleMenu: () => void,
    displayMenu: boolean
}

const MobileNavBar = ({ toggleMenu, displayMenu }: MobileNavBarType) => {
    const navBarRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (navBarRef.current && !navBarRef.current.contains(event.target as Node)) {
            console.log('Clicked outside the div');
        } else {
            console.log('Clicked inside the div');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div ref={navBarRef} className={`fixed z-20 overflow-hidden right-0 top-0 pt-[30px] pr-[3px] w-full h-full max-w-sm  ${displayMenu ? "display-on" : "display-off"} bg-white`}>
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
                    onClick={() => toggleMenu()}
                >X</button>
            </div>
            <MobileNavBarList/>
        </div>
    )
}

export default MobileNavBar