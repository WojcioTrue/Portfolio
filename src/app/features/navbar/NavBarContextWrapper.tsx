import NavBar from './NavBar'

import { NavBarContextProvider } from "./navBarContext/NavBarContextProvider"

const NavBarContextWrapper = () => {
    return (
        <NavBarContextProvider>
            <NavBar />
        </NavBarContextProvider>
    )
}

export default NavBarContextWrapper