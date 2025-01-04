"use client";
import React from 'react'
import MainText from './text/MainText';
import IconTemplate from './text/Icons/IconTemplate';

const Main = () => {
  return (
    <div className="relative flex min-h-[100%] px-8 bg-gradient-to-br from-my-lightBackground from-10% via-white items-center justify-center">
      <div className='w-max-[1200px] flex flex-col items-center gap-12 pt-24 ml:flex-row ml:gap-12 ml:pt-0 start'>
        <MainText />
        <IconTemplate name={'html'}/>
      </div>
    </div>
  )
}

export default Main