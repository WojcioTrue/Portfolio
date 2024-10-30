import { mabryProBold } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from "./NavBarIndicatorField"
import NavBarButton from "./NavBarButton"
import { useContext } from "react"
import { NavBarContext } from "./NavBar"

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const { listElements, setListElements } = navBarItems

    const changeCenter = (ev: React.MouseEvent) => {
        ev.preventDefault();
        // center of current target element

        const elementWidth = Math.round(Number(((ev.currentTarget as HTMLLIElement).offsetWidth)));
        // offset left element with 'left' property
        const leftValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;
        // offset element with 'right' property
        const rightValue = (document.body.clientWidth - (Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))
        console.log(elementWidth, leftValue, rightValue)
        const newPosition = { ...position, left: leftValue, right: rightValue }
        setPosition(newPosition)
    }

    const changeState = () => {
        const deActiveList = listElements.map((x) => {
            return { ...x, active: false };

        })
        setListElements(deActiveList)
    }

    return (

        <div
            onClick={
                (event: React.MouseEvent) => {
                    changeCenter(event);
                }}
            className="flex justify-between items-center w-auto gap-[10px] pr-3 pl-5">
            <a className="navbar__brand flex items-center" href="#">
                <NavBarIndicatorField text={'default'} />
                <p className={`py-3 inline my-auto text-3xl font-medium ${mabryProBold.className}`}>Wojcio_True</p>
            </a>
            <NavBarButton />
        </div>
    )
}

export default NavBarTitle