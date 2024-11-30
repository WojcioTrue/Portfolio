import NavBarIndicatorField from "./navBarList/NavBarIndicatorField"
import NavBarButton from "./NavBarToogleButton"
import { useContext } from "react"
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import { clickChangeCenter } from "./navBarHooks/useDefaultBackground"
import localFont from "next/font/local"
const mabry = localFont({src: '../../../../public/fonts/mabry_pro/MabryPro-Black.woff2'})

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const active = navBarItems.active

    const resetActive = () => {
        const liElements = navBarItems.listElements.map(x => ({ ...x, active: false }))
        navBarItems.setListElements(liElements)
    }

    return (
        <div
            onClick={
                (event: React.MouseEvent) => {
                    clickChangeCenter({
                        event,
                        position, 
                        setPosition
                    });
                    resetActive()
                }}
            id="desktop_navbar_default"
            className="navbar__brand flex justify-between items-center w-auto pr-3 pl-5">
            <a className="flex items-center gap-2" href="#">
                <NavBarIndicatorField text={'default'} />
                <p className={`py-3 inline my-auto text-2xl font-medium ${active ? 'text-my-black' : 'text-my-purple'} ${mabry.className}`}>Wojcio_True</p>
            </a>
            <NavBarButton />
        </div>
    )
}

export default NavBarTitle