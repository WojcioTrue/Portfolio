import { mabryProBold } from "@/app/assets/fonts/mabry_pro/MabryPro"
import NavBarIndicatorField from "./NavBarIndicatorField"
import NavBarButton from "./NavBarButton"
import { useContext } from "react"
import { NavBarContext } from "./NavBar"

const NavBarTitle = () => {
    const { navBarDesktopPosition, navBarItems, indicatorDesktop } = useContext(NavBarContext)
    const { position, setPosition } = navBarDesktopPosition
    const { setIndicatorPosition } = indicatorDesktop
    const active = navBarItems.active

    const changeCenter = (ev: React.MouseEvent) => {
        ev.preventDefault();
        // center of current target element
        const elementWidth = Math.round(Number(((ev.currentTarget as HTMLLIElement).clientWidth)));
        // offset left element with 'left' property
        const leftValue = Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;
        // offset element with 'right' property
        const rightValue = (document.body.clientWidth - (Number((ev.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))
        const newPosition = { ...position, left: leftValue, right: rightValue }
        setPosition(newPosition)
    }

    const changeIndicatorPos = (ev: React.MouseEvent) => {
        ev.preventDefault()
        const indicatorPosition = document.getElementById(`desktop_indicator_default`)!.getBoundingClientRect()

        const horizontalMidPosition = Number((indicatorPosition.left).toFixed(0))

        const verticalMidPosition = Number((indicatorPosition.top).toFixed(0))

        setIndicatorPosition({
            horizontalMid: horizontalMidPosition,
            verticalMid: verticalMidPosition,
        })
    }

    const resetActive = () => {
        const liElements = navBarItems.listElements.map(x => ({...x, active: false}))
        navBarItems.setListElements(liElements)
    }

return (

    <div
        onClick={
            (event: React.MouseEvent) => {
                changeCenter(event);
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