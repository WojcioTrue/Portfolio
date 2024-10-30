import { mabryProBold } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from "./NavBarIndicatorField"
import NavBarButton from "./NavBarButton"

const NavBarTitle = () => {
    return (
        <div className="flex justify-between w-full items-center">
            <a className="navbar__brand flex items-center" href="#">
                <NavBarIndicatorField text={'default'} />
                <p className={`pl-3.5 py-3 inline my-auto text-3xl font-medium ${mabryProBold.className}`}>Wojcio_True</p>
            </a>
            <NavBarButton/>
        </div>
    )
}

export default NavBarTitle