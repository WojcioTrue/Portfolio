import React, { useEffect, useRef, useContext } from 'react'
import MobileNavBarList from './mobileNavList/MobileNavBarList'
import './mobieNavBar.scss'
import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import MobileAnimatedBg from './animatedBg/MobileAnimatedBg'
import ToggleMenuButton from '@/app/features/navbar/ToggleMenuButton'
import { BlurPage } from './backdrop/BackDropContext'


BlurPage

const MobileNavBar = () => {
    // reference to mobile navbar
    const navBarRef = useRef<HTMLDivElement | null>(null);
    const { toogleMobileNav } = useContext(NavBarContext)
    const { blurPage } = useContext(BlurPage)
    const { setIsBlur } = blurPage
    const { displayMenu, setDisplayMenu } = toogleMobileNav

    useEffect(() => {
        // event listener checking if click occured inside navBar with current method
        const handleClickOutside = (event: MouseEvent) => {
            (navBarRef.current && !navBarRef.current.contains(event.target as Node)) && (setDisplayMenu(false), setIsBlur(false))
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
        <div ref={navBarRef} className={`fixed z-20 pl-2 overflow-hidden right-0 top-0 pt-[21px] w-full h-full max-w-sm  ${displayMenu ? "display-on" : "display-off"}`}>
            <div className='overflow-y-scroll h-full'>
                <div className="relative flex items-center px-3">
                    <span className='absolute top-[-21px] left-0 bg-gradient-to-tr from-my-gradient1 to-my-gradient2 w-full h-[5px]'></span>
                    <span className='mobile-logo w-full flex-1'>
                        <h1 className={`text-3xl text-my-purple`}>Wojcio_True</h1>
                    </span>
                    <ToggleMenuButton displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
                </div>
                <MobileNavBarList />
            </div>

            <MobileAnimatedBg />


        </div>
    )
}

export default MobileNavBar