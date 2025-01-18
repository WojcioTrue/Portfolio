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
    const { listElements, setListElements } = navBarItems

    const sectionsArr = ['default', 'Welcome', 'About']


    useEffect(() => {
        let activeElement = 'default'
        const scrollEv = () => {
            for (const section of sectionsArr) {
                const sectionById = document.getElementById(section)!
                const changeRange = window.scrollY - sectionById.offsetTop
                if ((changeRange <= 40) && (changeRange >= -40)) {
                    if (section !== activeElement) {
                        activeElement = section
                        setListElements(listElements.map(x => x.section === section ? { ...x, active: true } : { ...x, active: false }))
                    }
                }

            }
        }

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