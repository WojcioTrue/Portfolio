"use client";
import React from 'react'
import MainText from './text/MainText';

const Main = () => {
  return (
    <div className="relative flex min-h-[100%] px-8 bg-gradient-to-br from-my-lightBackground from-10% via-white items-center justify-center overflow-hidden">
        <MainText />
    </div>
  )
}

export default Main