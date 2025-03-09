import MainLayoutWrapper from '../MainLayoutWrapper'
import SkillPrompt from '../skillPrompt/SkillPrompt'
import MobileNavBar from './mobileNavbar/MobileNavBar'
import NavBar from './NavBar'
import { NavBarContextProvider } from "./navBarContext/NavBarContextProvider"

const NavBarContextWrapper = () => {
    return (
        <NavBarContextProvider>
            <NavBar />
            <MobileNavBar/>
            <MainLayoutWrapper/>
            <SkillPrompt/>
        </NavBarContextProvider>
    )
}

export default NavBarContextWrapper