"use client"
import { useContext, useEffect } from "react";
import Banner from "./main/Main";
import Tech from "./technologies/Tech";
import { BlurPage } from "./navbar/mobileNavbar/backdrop/BackDropContext";

const MainLayoutWrapper = () => {
    const { blurPage } = useContext(BlurPage)
    const { isBlur } = blurPage

    useEffect(() => {
        console.log('wrapper')
    },[])

    return (
        <span className={`${isBlur ? "blur-sm" : ""} transition-all duration-500`}>
            <Banner />
            <Tech />
        </span>
    )
}

export default MainLayoutWrapper