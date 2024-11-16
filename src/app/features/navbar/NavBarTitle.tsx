import { mabryProBold } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from "./navBarList/NavBarIndicatorField"
import NavBarButton from "./NavBarToogleButton"
import { useContext } from "react"
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import { getIndicatorPosition } from "./navBarHooks/useDefaultIndicator"
import { clickChangeCenter } from "./navBarHooks/useDefaultBackground"

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const { setIndicatorPosition } = indicatorDesktop
    const active = navBarItems.active

    const changeIndicatorPos = (ev: React.MouseEvent) => {
        ev.preventDefault()
        const newIndicatorPosition = getIndicatorPosition('default')
        setIndicatorPosition(newIndicatorPosition)
    }

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
                    changeIndicatorPos(event)
                    resetActive()
                }}
            id="desktop_navbar_default"
            className="navbar__brand flex justify-between items-center w-auto pr-3 pl-5">
            <a className="flex items-center gap-2" href="#">
                <NavBarIndicatorField text={'default'} />
                <p className={`py-3 inline my-auto text-2xl font-medium ${mabryProBold.className} ${active ? 'text-my-black' : 'text-my-purple'}`}>Wojcio_True</p>
            </a>
            <NavBarButton />
        </div>
    )
}

export default NavBarTitle