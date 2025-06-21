import { useContext, useEffect } from "react";
import { ItemPositionType } from "../navBarTypes";
import { SetStateAction, Dispatch } from "react"
import { NavBarContext } from "../navBarContext/NavBarContextProvider";
import useLiRef from "./useLiRef";

type DefaultBackGroundType = {
    activeSection: string,
    navBarDesktopPosition: ItemPositionType,
    setNavBarDesktopPosition: Dispatch<SetStateAction<ItemPositionType>>
}

type ClickChangeType = {
    event: React.MouseEvent,
    position: ItemPositionType,
    setPosition: Dispatch<SetStateAction<ItemPositionType>>,
}

type GetInitialPositionType = {
    ref: HTMLDivElement | HTMLLIElement | undefined | null,
    desktopPosition: ItemPositionType
}

export const clickChangeCenter = ({ event, position, setPosition }: ClickChangeType) => {
    event.preventDefault();
    // center of current target element
    const elementWidth = Math.round(Number(((event.currentTarget as HTMLLIElement).offsetWidth)));
    // offset left element with 'left' property
    const leftValue = Number((event.currentTarget as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;
    // offset element with 'right' property
    const rightValue = (document.body.clientWidth - (Number((event.currentTarget as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))

    const newPosition = { ...position, left: leftValue, right: rightValue }
    setPosition(newPosition)
}
// remove desktopPosition arg (to fix)
export const getPosition = ({ ref: element, desktopPosition }: GetInitialPositionType) => {
    if (element !== null) {
        const elementWidth = Math.round(Number(((element as HTMLLIElement).clientWidth)));

        const leftValue = Number((element as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;

        const rightValue = (document.body.clientWidth - (Number((element as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))

        return { ...desktopPosition, left: leftValue, right: rightValue }
    }

}

const useDefaultBackground = ({ activeSection, navBarDesktopPosition, setNavBarDesktopPosition }: DefaultBackGroundType) => {
    const { defaultLiRef } = useContext(NavBarContext)
    const activeLiRef = useLiRef(activeSection)

    useEffect(() => {
        if (activeSection.length > 0) {
            const activeSectionPosition = getPosition({
                ref: activeLiRef?.current,
                desktopPosition: navBarDesktopPosition
            })!

            setNavBarDesktopPosition(activeSectionPosition)
        } else {
            const defaultSectionPosition = getPosition({
                ref: defaultLiRef?.current,
                desktopPosition: navBarDesktopPosition
            })!
            setNavBarDesktopPosition(defaultSectionPosition)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeSection])
}

export default useDefaultBackground