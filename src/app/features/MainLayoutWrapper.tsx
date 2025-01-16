"use client"
import { useContext, useEffect } from "react";
import Banner from "./main/Main";
import Tech from "./technologies/Tech";
import { BlurPage } from "./navbar/mobileNavbar/backdrop/BackDropContext";

const MainLayoutWrapper = () => {
    const { blurPage } = useContext(BlurPage)
    const { isBlur } = blurPage

    useEffect(() => {

        const checkId = () => {
            const arrOfId = ['tech', 'tech2']
            
            arrOfId.forEach((x) => {
                const idTestTop = document.getElementById(x)?.getBoundingClientRect().top
                if(idTestTop !== undefined){
                    console.log(((idTestTop >= -100) && (idTestTop < 100)) && console.log(true, x) )
                }
          
            })
          

        }

        document.addEventListener('scroll', () => {
          checkId()
        })
      },[])

    return (
        <span className={`${isBlur ? "blur-sm" : "" } transition-all duration-500`}>
            <Banner />
            <Tech />
        </span>
    )
}

export default MainLayoutWrapper