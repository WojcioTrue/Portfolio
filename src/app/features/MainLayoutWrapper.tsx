"use client"
import { useContext, useEffect, useRef } from "react";
import Banner from "./main/Main";
import Tech from "./technologies/Tech";
import { BlurPage } from "./navbar/mobileNavbar/backdrop/BackDropContext";
import { NavBarContext } from "./navbar/navBarContext/NavBarContextProvider";

const MainLayoutWrapper = () => {
    const { navBarItems, disableBg } = useContext(NavBarContext)
    const { blurPage } = useContext(BlurPage)
    const { isBlur } = blurPage
    const { listElements, setListElements, setActive } = navBarItems
    const { disable, setDisable } = disableBg

    useEffect(() => {
        if (disable) {
            setTimeout(() => {
                setDisable(false)
                console.log('triggered')
            }, 250)
        }
    }, [disable, setDisable])

    useEffect(() => {
        const sectionsArr = ['default', 'Welcome', 'About', 'Text', 'Something']
        let activeElement = 'default'
        const scrollEvent = () => {
            if (disable) return;
            for (const section of sectionsArr) {
                const sectionById = document.getElementById(section)!
                const changedDistance = window.scrollY - sectionById.offsetTop
                const triggerChange = (changedDistance <= 200) && (changedDistance >= -200)
                if (triggerChange) {
                    if (section !== activeElement) {
                        activeElement = section;
                        if (section === 'default') {
                            setActive(false)
                            setListElements(listElements.map(x => { return { ...x, active: false } }))
                        } else {
                            setListElements(listElements.map(x => x.section === section ? { ...x, active: true } : { ...x, active: false }))
                        }
                    }
                }
            }
        }

        scrollEvent()
        if (!disable) {
            window.addEventListener('scroll', scrollEvent)
        }
        return () => {
            window.removeEventListener('scroll', scrollEvent)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disable])

    return (
        <span className={`${isBlur ? "blur-sm" : ""} transition-all `}>
            <Banner />
            <Tech />
        </span>
    )
}

export default MainLayoutWrapper