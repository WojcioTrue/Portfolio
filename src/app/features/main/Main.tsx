import React from 'react'
import localFont from "next/font/local"
import Button from '@/app/shared_components/Button'

const font = localFont({ src: '../../assets/fonts/mabry_pro/MabryPro-Regular.woff2' })

const Main = () => {
  return (
    <div className="relative h-full bg-slate-100 flex flex-col justify-center items-center">
      <div className='max-w-[90%] md'>
        <h1 className={`${font.className} 
      text-[42px] 
      sm:text-[50px] 
      md:text-[60px] 
      xl:text-[68px] 
      2xl:text-[72px]
      text-center`}>Wojcio_True</h1>
        <p className="text-[16px] sm:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <Button text={'banger'}/>
      </div>
    </div>
  )
}

export default Main