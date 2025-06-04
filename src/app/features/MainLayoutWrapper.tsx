"use client"
import { useContext, useEffect } from "react";
import Main from "./main/Main";
import Skills from "./techStack/Skills";
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
            }, 250)
        }
    }, [disable, setDisable])

    useEffect(() => {
        // const assignRef = (arg: string) => {
        //     if (arg = 'default') {
        //         return defaultRef
        //     } else if (arg === 'Skills') {
        //         return skillsRef
        //     } else if (arg === 'About') {
        //         return aboutRef
        //     } else if (arg === 'Text') {
        //         return textRef
        //     } else if (arg === 'Something') {
        //         return somethingRef
        //     }
        // }
        const sectionsArr = listElements.map(x => x.section)
        sectionsArr.unshift('default')
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
            <Main />
            <Skills />
        </span>
    )
}

export default MainLayoutWrapper