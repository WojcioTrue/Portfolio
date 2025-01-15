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
    const { toogleMobileNav, navBarItems, navBarMobilePosition } = useContext(NavBarContext)
    const { blurPage } = useContext(BlurPage)
    const { setIsBlur } = blurPage
    const { displayMenu, setDisplayMenu } = toogleMobileNav
    const { position, setPosition } = navBarMobilePosition

    useEffect(() => {
        // event listener checking if click occured inside navBar 
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



    useEffect(() => {

        const scrollPosition = () => {
            const labelElement = document.getElementById('mobile-navbar-list')!
            const getActiveSection = navBarItems.listElements.filter(x => x.active === true)
            if (displayMenu) {
                if (getActiveSection.length > 0) {
                  const activeSectionName = `mobile_navbar_li_${getActiveSection[0].section}`
                  const firstLiElement = document.getElementById(activeSectionName)!;
          
                  const topValue = Number(firstLiElement.getBoundingClientRect().top.toFixed(0))
                  const bottomValue = Number(firstLiElement.getBoundingClientRect().bottom.toFixed(0))
                  const newPosition = { ...position, top: topValue, bottom: bottomValue }
                  setPosition(newPosition)
                  console.log('changed')

                } else {
                  const topValue = Number(labelElement.getBoundingClientRect().top.toFixed(0))
                  const bottomValue = Number(labelElement.getBoundingClientRect().bottom.toFixed(0))
                  const newPosition = { ...position, top: topValue, bottom: bottomValue }
                  setPosition(newPosition)
                }
              }
            }
        const mobileScrollDiv = document.getElementById('mobile-menu-scroll');
        mobileScrollDiv!.addEventListener('scroll', scrollPosition)

        return () => {
            mobileScrollDiv!.removeEventListener('scroll', scrollPosition)
        }

    }, [navBarItems.listElements, displayMenu, position, setPosition])

    return (
        <div ref={navBarRef} className={`fixed z-20 pl-2 overflow-hidden right-0 top-0 w-full h-full max-w-sm  ${displayMenu ? "display-on" : "display-off"}`}>

            <div id="mobile-menu-scroll" className='overflow-y-auto h-full'>
                <span className='absolute top-0 left-2 bg-gradient-to-tr from-my-gradient1 to-my-gradient2 w-full h-[5px]'></span>
                <div className="relative flex items-center px-3 pt-[21px]">

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