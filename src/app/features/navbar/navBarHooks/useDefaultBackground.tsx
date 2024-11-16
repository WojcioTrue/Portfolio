import { useEffect } from "react";
import { ListElement } from "../navBarTypes";
import { ItemPositionType } from "../navBarTypes";
import { SetStateAction, Dispatch } from "react"

type DefaultBackGroundType = {
    listElements: ListElement[],
    navBarDesktopPosition: ItemPositionType,
    setNavBarDesktopPosition: Dispatch<SetStateAction<ItemPositionType>>
}

type ClickChangeType = {
    event: React.MouseEvent,
    position: ItemPositionType,
    setPosition: Dispatch<SetStateAction<ItemPositionType>>,
}

type GetInitialPositionType = {
    id: string,
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

export const getPosition = ({ id, desktopPosition }: GetInitialPositionType) => {
    
    const element = document.getElementById(id)!;
    const elementWidth = Math.round(Number(((element as HTMLLIElement).clientWidth)));

    const leftValue = Number((element as HTMLLIElement).getBoundingClientRect().left.toFixed(0)) + elementWidth;

    const rightValue = (document.body.clientWidth - (Number((element as HTMLLIElement).getBoundingClientRect().right.toFixed(0)) - elementWidth))

    const topValue = Number(element.getBoundingClientRect().top.toFixed(0))

    const bottomValue = Number(element.getBoundingClientRect().bottom.toFixed(0))

    return { ...desktopPosition, left: leftValue, right: rightValue }
}

const useDefaultBackground = ({ listElements, navBarDesktopPosition, setNavBarDesktopPosition }: DefaultBackGroundType) => {

    useEffect(() => {
        const getActiveSection = listElements.filter(x => x.active === true)
        // check if there are active elements
        if (getActiveSection.length === 0) {
            const defaultSectionPosition = getPosition({
                id: 'desktop_navbar_default', 
                desktopPosition: navBarDesktopPosition
            })
            setNavBarDesktopPosition(defaultSectionPosition)
        }
        else {
            const activeSectionName = `desktop_navbar_li_${getActiveSection[0].section}`
            const activeSectionPosition = getPosition({
                id: activeSectionName, 
                desktopPosition: navBarDesktopPosition
            })

            setNavBarDesktopPosition(activeSectionPosition)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listElements])
}

export default useDefaultBackground