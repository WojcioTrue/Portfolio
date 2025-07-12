import MainLayoutWrapper from "../MainLayoutWrapper";
import SkillPromptWrapper from "../skillPrompt/SkillPromptWrapper";
import SkillPromptContextProvider from "../skillPrompt/SkillPromptContextProvider";
import MobileNavBar from "./mobileNavbar/MobileNavBar";
import NavBar from "./NavBar";
import { NavBarContextProvider } from "./navBarContext/NavBarContextProvider";

const NavBarContextWrapper = () => {
  return (
    <NavBarContextProvider>
      <NavBar />
      <MobileNavBar />
      <SkillPromptContextProvider>
        <MainLayoutWrapper />
        <SkillPromptWrapper />
      </SkillPromptContextProvider>
    </NavBarContextProvider>
  );
};

export default NavBarContextWrapper;
