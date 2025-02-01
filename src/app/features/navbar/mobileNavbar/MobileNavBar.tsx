import React, { useEffect, useContext } from 'react'
import MobileNavBarList from './mobileNavList/MobileNavBarList'
import './mobieNavBar.scss'
import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import MobileAnimatedBg from './animatedBg/MobileAnimatedBg'
import ToggleMenuButton from '@/app/features/navbar/ToggleMenuButton'
import { BlurPage } from './backdrop/BackDropContext'
import useScrollBackground from './mobieNavBarHooks/useScrollBackground'
import { Link } from 'react-scroll';

const MobileNavBar = () => {
    const { toogleMobileNav } = useContext(NavBarContext)
    const { blurPage } = useContext(BlurPage)
    const { setIsBlur } = blurPage
    const { displayMenu, setDisplayMenu } = toogleMobileNav

    useEffect(() => {
        const backdropId = document.getElementById('backdrop')

        const handleClickOutside = (event: MouseEvent) => {
            (backdropId && backdropId.contains(event.target as Node)) && (setDisplayMenu(false), setIsBlur(false))
        };

        document.body.addEventListener('click', handleClickOutside);
        // cleanup
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setDisplayMenu]);

    useScrollBackground()

    return (
        <div className={`fixed z-20 pl-2 overflow-hidden right-0 top-0 w-full h-full max-w-sm  ${displayMenu ? "display-on" : "display-off"}`}>
            <div id="mobile-menu-scroll" className='overflow-y-auto h-full'>
                <span className='absolute top-0 bg-gradient-to-tr from-my-gradient1 to-my-gradient2 w-full h-[5px]'></span>
                <div className="relative flex items-center px-3 pt-[21px]">
                    <span onClick={
                        () => {
                            setDisplayMenu(false),
                                setIsBlur(false)
                        }
                    }
                        className='mobile-logo w-full flex-1'>
                        <Link
                            activeClass="active"
                            to={'default'}
                            spy={true}
                            smooth={true}
                            duration={200}
                        >
                    <h1 className={`text-3xl text-my-purple`}>Wojcio_True</h1>
                        </Link>
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