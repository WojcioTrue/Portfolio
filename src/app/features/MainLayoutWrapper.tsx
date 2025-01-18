"use client"
import { useContext, useEffect } from "react";
import Banner from "./main/Main";
import Tech from "./technologies/Tech";
import { BlurPage } from "./navbar/mobileNavbar/backdrop/BackDropContext";
import { NavBarContext } from "./navbar/navBarContext/NavBarContextProvider";
import { categories } from "./navbar/navItems";

const MainLayoutWrapper = () => {
    const { navBarItems } = useContext(NavBarContext)
    const { blurPage } = useContext(BlurPage)
    const { setListElements, listElements, setActive } = navBarItems
    const { isBlur } = blurPage

    // useEffect(() => {
    //     console.log('changed list', listElements)
    // }, [listElements])

    useEffect(() => {
        const checkId = () => {
            const arrOfId = ['default', 'Welcome', 'About']
            for (const arg of arrOfId) {
                const id = document.getElementById(arg)?.getBoundingClientRect().top
                if (id !== undefined) {
                    const triggerChange = ((id >= -100) && (id < 100));
                    if (triggerChange) {
                        // console.log(arg)
                        setListElements(categories.map(x => x.section === arg ? { ...x, active: true } : { ...x, active: false }))
                    }
                }
            }
        }
        checkId()
        document.addEventListener('scroll', () => {
            checkId()
        }); return () => {
            document.removeEventListener('scroll', () => {
                checkId()
            })
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