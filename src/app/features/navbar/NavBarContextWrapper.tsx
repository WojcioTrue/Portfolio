import MainLayoutWrapper from '../MainLayoutWrapper'
import SkillPrompt from '../skillPrompt/SkillPrompt'
import SkillPromptContextProvider from '../skillPrompt/SkillPromptContextProvider'
import MobileNavBar from './mobileNavbar/MobileNavBar'
import NavBar from './NavBar'
import { NavBarContextProvider } from "./navBarContext/NavBarContextProvider"

const NavBarContextWrapper = () => {
    return (
        <NavBarContextProvider>
            <NavBar />
            <MobileNavBar />
            <SkillPromptContextProvider>
                <MainLayoutWrapper />
                <SkillPrompt />
            </SkillPromptContextProvider>
        </NavBarContextProvider>
    )
}

export default NavBarContextWrapper