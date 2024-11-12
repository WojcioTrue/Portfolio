import { useContext, useEffect } from "react";
import { NavBarContext } from "../NavBar";

const UseDefaultBackground = () => {
    const {navBarItems, navBarDesktopPosition} = useContext(NavBarContext)
    const {position, setPosition} = navBarDesktopPosition
    const active = navBarItems.active
    const listElements = navBarItems.listElements

    useEffect(() => {
        const getActiveSection = listElements.filter(x => x.active === true)
        // check if there are active elements
        if (getActiveSection.length === 0) {
            const firstLiElement = document.getElementsByClassName(`navbar__brand`);
            const el = firstLiElement[0]
            const elWidth = Math.round(Number(((el as HTMLLIElement).clientWidth)));
            // offset left element with 'left' property
            const leftValue = Number((el as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elWidth;
            // offset element with 'right' property
            const rightValue = (document.body.clientWidth - (Number((el as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elWidth))

            const newPosition = { ...position, left: leftValue, right: rightValue }

            setPosition(newPosition)
        }
        else {
            const activeSectionName = `desktop_navbar_li_${getActiveSection[0].section}`
            const firstLiElement = document.getElementById(activeSectionName)!;

            const elementWidth = firstLiElement.offsetWidth
            // positions for background borders
            const leftValue = Number(firstLiElement.getBoundingClientRect().left.toFixed(0)) + elementWidth;
            const rightValue = document.body.clientWidth - Number(firstLiElement.getBoundingClientRect().right.toFixed(0)) + elementWidth;
            const topValue = Number(firstLiElement.getBoundingClientRect().top.toFixed(0))
            const bottomValue = Number(firstLiElement.getBoundingClientRect().bottom.toFixed(0))

            setPosition({
                left: leftValue,
                right: rightValue,
                top: topValue,
                bottom: bottomValue
            })

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listElements, active])
}

export default UseDefaultBackground