"use client"
import Banner from "./features/main/Main";
import Tech from "./features/technologies/Tech";
import NavBarContextWrapper from "./features/navbar/NavBarContextWrapper";


export default function Home() {
  
  return (
    <>
        <NavBarContextWrapper />
        <span className={/**${isBlur ? "blur-sm" : "" */`} scale-150 transition-all duration-500`}>
          <Banner />
          <Tech />
        </span>
    </>
  );
}
