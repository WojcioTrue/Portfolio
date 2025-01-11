"use client";
import MainText from './text/MainText';

const Main = () => {
  return (
    <div className="relative flex min-h-[100%] px-8 landscape:pt-[50px] bg-gradient-to-br from-my-lightBackground from-10% via-white items-center justify-center overflow-hidden" style={{
      paddingTop: '100px',

    }}>
        <MainText />
    </div>
  )
}

export default Main