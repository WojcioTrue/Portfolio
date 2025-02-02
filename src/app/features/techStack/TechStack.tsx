import React from 'react'
import { mabryProBold, mabryProLight } from '@/app/assets/fonts/MabryPro'

const TechStack = () => {
    return (
        <div id="Skills" className="relative h-full bg-white border-t-[1px] border-my-lightGray" >
            <h1 className={`text-[42px] sm:text-[50px] md:text-[60px] xl:text-[68px] 2xl:text-[72px] text-center pt-10 ${mabryProBold.className}`}>Technology stack.</h1>
            <p className={`text-[16px] w-full text-my-gray pb-6 sm:text-[24px] text-center ${mabryProLight.className}`}>My set of technologies used to build web apps.</p>
        </div>
    )
}

export default TechStack