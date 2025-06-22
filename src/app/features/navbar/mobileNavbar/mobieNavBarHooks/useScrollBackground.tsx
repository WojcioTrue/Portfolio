import { useEffect, useContext } from 'react'
import { NavBarContext } from '../../navBarContext/NavBarContextProvider'
import useMobileLiRef from './useMobileLiRef'

const useScrollBackground = () => {
    const { toogleMobileNav, navBarItems, navBarMobilePosition, mobileNavLabelRef } = useContext(NavBarContext)
    const { displayMenu } = toogleMobileNav
    const { position, setPosition } = navBarMobilePosition
    const activeLi = navBarItems.listElements.filter(x => x.active === true)
    const getRef = () => activeLi.length > 0 ? activeLi[0].section : ''
    const liRef = useMobileLiRef(getRef())!

    useEffect(() => {
        const scrollPosition = () => {
            console.log('w')
            const labelElement = mobileNavLabelRef?.current!
            if (displayMenu) {
                if (activeLi.length > 0) {
                    console.log('triggered')
                    const activeSection = liRef.current!
                    const topValue = Number(activeSection.getBoundingClientRect().top.toFixed(0))
                    const bottomValue = Number(activeSection.getBoundingClientRect().bottom.toFixed(0))
                    const newPosition = { ...position, top: topValue, bottom: bottomValue }
                    setPosition(newPosition)
                } else {
                    console.log('triggered')
                    const topValue = Number(labelElement.getBoundingClientRect().top.toFixed(0))
                    const bottomValue = Number(labelElement.getBoundingClientRect().bottom.toFixed(0))
                    const newPosition = { ...position, top: topValue, bottom: bottomValue }
                    setPosition(newPosition)
                }
            }
        }
        const mobileScrollDiv = document.getElementById('mobile-menu-scroll')!;
        mobileScrollDiv.addEventListener('scroll', scrollPosition)

        return () => {
            mobileScrollDiv.removeEventListener('scroll', scrollPosition)
        }

    }, [navBarItems.listElements, displayMenu, position, setPosition, mobileNavLabelRef, liRef, activeLi.length])
}

export default useScrollBackground