import NavBarIndicatorField from "./navBarList/NavBarIndicatorField"
import { useContext } from "react"
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import { clickChangeCenter } from "./navBarHooks/useDefaultBackground"
import ToggleMenuButton from "@/app/features/navbar/ToggleMenuButton"

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems, toogleMobileNav } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const {displayMenu, setDisplayMenu} = toogleMobileNav
    const {listElements, setActive} = navBarItems

    const resetActive = () => {
        const liElements = listElements.map(x => ({ ...x, active: false }))
        navBarItems.setListElements(liElements),
        setActive(false)
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
                <p className={`py-3 inline my-auto text-2xl font-medium text-my-purple`}>Wojcio_True</p>
            </a>
            <ToggleMenuButton displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} onlyMobile={true}/>
        </div>
    )
}

export default NavBarTitle