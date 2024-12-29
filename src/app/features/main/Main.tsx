"use client";
import React from 'react'
import MainText from './text/MainText';
import MainIcons from './Icons/MainIcons';

const Main = () => {
  return (
    <div className="relative flex min-h-[100%] bg-gradient-to-br from-my-lightBackground from-10% via-white">
      <MainText/>
      <MainIcons/>
    </div>
  )
}

export default Main