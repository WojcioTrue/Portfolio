import React from 'react'
import localFont from "next/font/local"
import Button from '@/app/shared_components/Button'

const fontBold = localFont({ src: '../../assets/fonts/mabry_pro/MabryPro-Bold.woff2' })
const fontRegular = localFont({ src: '../../assets/fonts/mabry_pro/MabryPro-regular.woff2' })

const Main = () => {
  return (
    <div className="relative h-full">
      <div className='h-full w-full max-w-[1200px] px-8 flex justify-center items-center ml:justify-start m-auto'>
        <div className='max-w-[600px] flex flex-col flex-nowrap items-center ml:items-start'>
          <h1 className={`${fontBold.className} 
      text-[42px] 
      sm:text-[50px] 
      md:text-[60px] 
      xl:text-[68px] 
      2xl:text-[72px]
      text-center mb-4`}>Wojcio_True</h1>
          <p className={`text-[16px] text-my-gray mb-4 sm:text-[24px] text-center ml:text-left ${fontRegular.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Button text={'Read more '} />
        </div>
      </div>

    </div>
  )
}

export default Main