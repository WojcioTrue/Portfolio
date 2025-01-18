"use client"
import { useContext, useEffect } from "react";
import Banner from "./main/Main";
import Tech from "./technologies/Tech";
import { BlurPage } from "./navbar/mobileNavbar/backdrop/BackDropContext";
import { NavBarContext } from "./navbar/navBarContext/NavBarContextProvider";

const MainLayoutWrapper = () => {
    const { navBarItems } = useContext(NavBarContext)
    const { blurPage } = useContext(BlurPage)
    const { isBlur } = blurPage
    const { listElements, setListElements, setActive } = navBarItems



    useEffect(() => {
        const sectionsArr = ['default', 'Welcome', 'About','Text','Something']
        let activeElement = 'default'
        const scrollEv = () => {
            for (const section of sectionsArr) {
                const sectionById = document.getElementById(section)!
                const changedDistance = window.scrollY - sectionById.offsetTop
                const triggerChange = (changedDistance <= 40) && (changedDistance >= -40)
                if (triggerChange) {
                    if (section !== activeElement) {
                        activeElement = section;
                        if (section === 'default') {
                            setActive(false)
                            setListElements(listElements.map(x => { return { ...x, active: false } }))
                        } else {
                            console.log(section)
                            setListElements(listElements.map(x => x.section === section ? { ...x, active: true } : { ...x, active: false }))
                        }
                    }
                }
            }
        }
        scrollEv()
        window.addEventListener('scroll', () => {
            scrollEv()
        })
        return () => {
            window.removeEventListener('scroll', () => [
                scrollEv()
            ])
        }
    }, [])

    return (
        <span className={`${isBlur ? "blur-sm" : ""} transition-all duration-500`}>
            <Banner />
            <Tech />
        </span>
    )
}

export default MainLayoutWrapper