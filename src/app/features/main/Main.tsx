"use client";
import { useContext } from "react";
import { NavBarContext } from "../navbar/navBarContext/NavBarContextProvider";
import MainText from "./text/MainText";

const Main = () => {
  const { defaultSectionRef } = useContext(NavBarContext);
  return (
    <div
      id="default"
      ref={defaultSectionRef}
      className="relative flex min-h-[100%] items-center justify-center overflow-hidden bg-gradient-to-br from-my-lightBackground from-20% via-my-white px-8 landscape:pb-[50px] landscape:pt-[80px]"
    >
      <MainText />
    </div>
  );
};

export default Main;
