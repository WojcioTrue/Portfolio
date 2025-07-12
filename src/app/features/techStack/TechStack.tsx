import Header from "./Header";
import Description from "./Description";
import SkillsGrid from "./gridOfSkills/dropField/SkillsGrid";
import TechStackContextProvider from "./techStackContext/TechStackContext";
import { useContext } from "react";
import { NavBarContext } from "../navbar/navBarContext/NavBarContextProvider";

const TechStack = () => {
  const { skillsSectionRef } = useContext(NavBarContext);
  return (
    <TechStackContextProvider>
      <div
        id="Skills"
        ref={skillsSectionRef}
        className="relative flex min-h-[calc(100%_-_77px)] flex-col items-center justify-center overflow-hidden border-t-[1px] border-my-lightGray bg-white pb-16 pt-10"
      >
        <Header />
        <Description />
        <SkillsGrid />
      </div>
    </TechStackContextProvider>
  );
};

export default TechStack;
