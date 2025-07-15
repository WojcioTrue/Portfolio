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
        className="relative block min-h-[calc(100%_-_77px)] select-none overflow-hidden border-t-[1px] border-my-lightGray bg-gradient-to-tl from-my-lightBackground from-[20%] via-my-white pt-20 pb-24"
      >
        <Header />
        <Description />
        <CarouselWrapper />
      </div>
    </CarouselContextProvider>
  );
};

export default About;
