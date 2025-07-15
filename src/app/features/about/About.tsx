import React, { useContext } from "react";
import { NavBarContext } from "../navbar/navBarContext/NavBarContextProvider";
import Header from "./Header";
import Description from "./Description";
import CarouselWrapper from "./carousel/CarouselWrapper";
import { CarouselContextProvider } from "./carouselContext/CarouselContextProvider";

const About = () => {
  const { aboutSectionRef } = useContext(NavBarContext);
  return (
    <CarouselContextProvider>
      <div
        id="About"
        ref={aboutSectionRef}
        className="relative flex min-h-[calc(100%_-_77px)] select-none flex-col items-center justify-center overflow-hidden border-t-[1px] border-my-lightGray bg-gradient-to-tl from-my-lightBackground from-[20%] via-my-white pb-24 pt-20"
      >
        <Header />
        <Description />
        <CarouselWrapper />
      </div>
    </CarouselContextProvider>
  );
};

export default About;
