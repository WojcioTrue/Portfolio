import MainLayoutWrapper from '../MainLayoutWrapper'
import NavBar from './NavBar'
import { NavBarContextProvider } from "./navBarContext/NavBarContextProvider"

const NavBarContextWrapper = () => {
    return (
        <NavBarContextProvider>
            <NavBar />
            <MainLayoutWrapper/>
        </NavBarContextProvider>
    )
}

export default NavBarContextWrapper