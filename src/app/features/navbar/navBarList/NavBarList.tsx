import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { useContext, useEffect, useState } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { ListElement } from '../navBarTypes';
import { getPosition } from "../navBarHooks/useDefaultBackground";
import useLiRef from "../navBarHooks/useLiRef";

type NavBarListType = {
  activeLiElement : string
}

const NavBarList = ({activeLiElement} : NavBarListType) => {
  const { navBarItems, navBarDesktopPosition, defaultLiRef } = useContext(NavBarContext)
  const [activeElement, setActiveElement] = useState<ListElement[]>([])
  const { listElements } = navBarItems
  const { position, setPosition } = navBarDesktopPosition
  const activeLiRef = useLiRef(activeLiElement)

  useEffect(() => {
    const updateActiveLi = () => {
      const activeElement = navBarItems.listElements.filter(x => x.active === true);
      setActiveElement(activeElement)
    }

    window.addEventListener('resize', updateActiveLi)

    return () => {
      window.removeEventListener('resize', updateActiveLi)
    }
  }, [navBarItems.listElements])

  useEffect(() => {
      if (activeElement[0] !== undefined) {
        const activeSectionPosition = getPosition({
          ref: activeLiRef?.current,
          desktopPosition: { ...position }
        })!
        setPosition(activeSectionPosition)
      }
      else {
        const defaultSectionPosition = getPosition({
          ref: defaultLiRef?.current!,
          desktopPosition: { ...position }
        })!
        setPosition(defaultSectionPosition)
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeElement, setPosition, listElements]);

  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {listElements.map((listItem) => <NavBarListElement id={`desktop_navbar_li_${listItem.section}`} key={uuidv4()} text={listItem.section} isActive={listItem.active} />)}
    </ul>
  );
};

export default NavBarList;
