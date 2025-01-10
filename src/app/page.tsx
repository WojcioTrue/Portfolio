"use client"
import Banner from "./features/main/Main";
import Tech from "./features/technologies/Tech";
import NavBarContextWrapper from "./features/navbar/NavBarContextWrapper";
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

type BlurPageType = {
  blurPage: {
    isBlur: boolean,
    setIsBlur: Dispatch<SetStateAction<boolean>>
  }
}

export const BlurPage = createContext<BlurPageType>({
  blurPage: {
    isBlur: false,
    setIsBlur: () => { }
  }
})

export default function Home() {
  const [isBlur, setIsBlur] = useState<boolean>(false)
  return (
    <>
      <BlurPage.Provider value={{
        blurPage: {
          isBlur,
          setIsBlur,
        }
      }}>
        <NavBarContextWrapper />
        <span className={`${isBlur ? "blur-sm" : ""} scale-150 transition-all duration-500`}>
          <Banner />
          <Tech />
        </span>
      </BlurPage.Provider>

    </>
  );
}
