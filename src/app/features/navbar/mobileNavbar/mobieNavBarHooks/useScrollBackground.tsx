import { useEffect, useContext, useMemo } from 'react'
import { NavBarContext } from '../../navBarContext/NavBarContextProvider'
import useMobileLiRef from './useMobileLiRef'

const useScrollBackground = () => {
    const { toogleMobileNav, navBarItems, navBarMobilePosition, mobileNavLabelRef } = useContext(NavBarContext)
    const { displayMenu } = toogleMobileNav
    const { position, setPosition } = navBarMobilePosition
    const activeLi = useMemo(() => 
        navBarItems.listElements.filter(x => x.active === true)
    ,[navBarItems.listElements])
    const getRef = () => activeLi.length > 0 ? activeLi[0].section : ''
    const liRef = useMobileLiRef(getRef())!

    useEffect(() => {
        const scrollPosition = () => {
            const labelElement = mobileNavLabelRef?.current!
            if (!displayMenu) {
                if (activeLi.length > 0) {
                    const activeSection = liRef.current!
                    const topValue = Number(activeSection.getBoundingClientRect().top.toFixed(0))
                    const bottomValue = Number(activeSection.getBoundingClientRect().bottom.toFixed(0))
                    const newPosition = { ...position, top: topValue, bottom: bottomValue }
                    setPosition(newPosition)
                } else {
                    const topValue = Number(labelElement.getBoundingClientRect().top.toFixed(0))
                    const bottomValue = Number(labelElement.getBoundingClientRect().bottom.toFixed(0))
                    const newPosition = { ...position, top: topValue, bottom: bottomValue }
                    setPosition(newPosition)
                }
            }
        }
        scrollPosition()
    }, [activeLi])
}

export default useScrollBackground