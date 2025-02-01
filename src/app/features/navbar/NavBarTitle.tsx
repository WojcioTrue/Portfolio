import NavBarIndicatorField from "./navBarList/NavBarIndicatorField"
import { useContext } from "react"
import { NavBarContext } from "./navBarContext/NavBarContextProvider"
import { clickChangeCenter } from "./navBarHooks/useDefaultBackground"
import ToggleMenuButton from "@/app/features/navbar/ToggleMenuButton"
import { Link } from 'react-scroll';
import useDisableScrollEv from "./navBarHooks/useDisableScrollEv"
useDisableScrollEv

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const { listElements, setActive } = navBarItems
    const [disable, disableAfterClick] = useDisableScrollEv()

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

            <Link
                className="flex items-center gap-2 cursor-pointer"
                activeClass="active"
                to={'default'}
                spy={true}
                smooth={true}
                duration={200}
                onClick={() => {
                    resetActive()
                    disableAfterClick()
                }}
            >
                <NavBarIndicatorField text={'default'} />
                <p className={`py-3 inline my-auto text-2xl font-medium text-my-purple`}>Wojcio_True</p>
            </Link>
            <ToggleMenuButton onlyMobile={true} />
        </div>
    )
}

export default NavBarTitle