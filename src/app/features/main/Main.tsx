"use client";
import { useContext } from 'react';
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider';
import MainText from './text/MainText';

const Main = () => {
  const { defaultSectionRef } = useContext(NavBarContext)
  return (
    <div
      ref={defaultSectionRef}
      className="relative flex min-h-[100%] px-8 landscape:pt-[80px] landscape:pb-[50px] bg-gradient-to-br from-my-lightBackground from-20% via-my-white items-center justify-center overflow-hidden">
      <MainText />
    </div>
  )
}

export default Main