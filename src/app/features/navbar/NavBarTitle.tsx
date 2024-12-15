import NavBarIndicatorField from "./navBarList/NavBarIndicatorField"
import { useContext } from "react"
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import { clickChangeCenter } from "./navBarHooks/useDefaultBackground"
import { mabryProBold } from "@/app/assets/fonts/MabryPro"
import ToggleMenuButton from "@/app/shared_components/ToggleMenuButton"

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems, toogleMobileNav } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const {displayMenu, setDisplayMenu} = toogleMobileNav

    const resetActive = () => {
        const liElements = navBarItems.listElements.map(x => ({ ...x, active: false }))
        navBarItems.setListElements(liElements)
    }

    return (
        <div
            onClick={(event: React.MouseEvent) => {
                    clickChangeCenter({
                        event,
                        position, 
                        setPosition
                    })
                }}
            id="desktop_navbar_default"
            className="navbar__brand flex justify-between items-center w-auto pr-3 pl-5">
            <a onClick={() => resetActive()} className="flex items-center gap-2" href="#">
                <NavBarIndicatorField text={'default'} />
                <p className={`py-3 inline my-auto text-2xl font-medium text-my-purple ${mabryProBold.className}`}>Wojcio_True</p>
            </a>
            <ToggleMenuButton displayMenu={displayMenu} setDisplayMenu={setDisplayMenu}/>
        </div>
    )
}

export default NavBarTitle