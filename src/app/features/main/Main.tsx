"use client";
import React from 'react'
import MainText from './text/MainText';
import MainIcons from './Icons/MainIcons';

const Main = () => {
  return (
    <div className="relative min-h-[100%] w-full flex flex-row justify-center px-8 bg-gradient-to-br from-my-lightBackground from-10% via-white">
      <div className='w-max-[1200px]'>
        <MainText />
        <MainText />
        <MainIcons />
      </div>
    </div>
  )
}

export default Main