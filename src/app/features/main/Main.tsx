"use client";
import MainText from './text/MainText';

const Main = () => {
  return (
    <div id="default" className="relative flex min-h-[100%] px-8 landscape:pt-[80px] landscape:pb-[50px] bg-gradient-to-br from-my-lightBackground from-20% via-my-white items-center justify-center overflow-hidden">
        <MainText />
    </div>
  )
}

export default Main