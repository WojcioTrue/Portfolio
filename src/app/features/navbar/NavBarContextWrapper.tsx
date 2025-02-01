import MainLayoutWrapper from '../MainLayoutWrapper'
import MobileNavBar from './mobileNavbar/MobileNavBar'
import NavBar from './NavBar'
import { NavBarContextProvider } from "./navBarContext/NavBarContextProvider"

const NavBarContextWrapper = () => {
    return (
        <NavBarContextProvider>
            <NavBar />
            <MobileNavBar/>
            <MainLayoutWrapper/>
        </NavBarContextProvider>
    )
}

export default NavBarContextWrapper