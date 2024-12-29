"use client";
import React from 'react'
import MainText from './text/MainText';
import IconsArray from './iconsArray/IconsArray';


const Main = () => {
  return (
    <div className="relative flex min-h-[100%] bg-gradient-to-br from-my-lightBackground from-10% via-white">
      <MainText/>
      <IconsArray/>
    </div>
  )
}

export default Main