"use client"
import Banner from "./main/Main";
import Tech from "./technologies/Tech";

const MainLayoutWrapper = () => {
  return (
    <span className={/**${isBlur ? "blur-sm" : "" */`} scale-150 transition-all duration-500`}>
    <Banner />
    <Tech />
  </span>
  )
}

export default MainLayoutWrapper