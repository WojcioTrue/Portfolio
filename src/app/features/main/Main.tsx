import React from 'react'
import localFont from "next/font/local"
import Button from '@/app/shared_components/Button'

const font = localFont({ src: '../../assets/fonts/mabry_pro/MabryPro-Bold.woff2' })

const Main = () => {
  return (
    <div className="relative h-full bg-slate-100">
      <div className='h-full w-full max-w-[1200px] px-8 flex justify-center items-center ml:justify-start m-auto'>
        <div className='max-w-[500px] flex flex-col flex-nowrap items-center ml:items-start'>
          <h1 className={`${font.className} 
      text-[42px] 
      sm:text-[50px] 
      md:text-[60px] 
      xl:text-[68px] 
      2xl:text-[72px]
      text-center`}>Wojcio_True</h1>
          <p className="text-[16px] sm:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Button text={'banger'} />
        </div>
      </div>

    </div>
  )
}

export default Main