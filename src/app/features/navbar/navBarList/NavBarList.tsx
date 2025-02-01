import { NavBarContext } from "../navBarContext/NavBarContextProvider"
import { useContext, useEffect, useState } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { ListElement } from '../navBarTypes';
import { getPosition } from "../navBarHooks/useDefaultBackground";


const NavBarList = () => {
  const { navBarItems, navBarDesktopPosition } = useContext(NavBarContext)
  const [activeElement, setActiveElement] = useState<ListElement[]>([])
  const { listElements } = navBarItems
  const { position, setPosition } = navBarDesktopPosition


  useEffect(() => {
    const updateActiveLi = () => {
      const activeElement = () => navBarItems.listElements.filter(x => x.active === true);
      setActiveElement(activeElement())
    }

    window.addEventListener('resize', updateActiveLi)

    return () => {
      window.removeEventListener('resize', updateActiveLi)
    }
  }, [navBarItems.listElements])

  useEffect(() => {
    function handleResize() {
      if (activeElement[0] !== undefined) {
        const activeSectionName = `desktop_navbar_li_${activeElement[0].section}`
        const activeSectionPosition = getPosition({
          id: activeSectionName,
          desktopPosition: { ...position }
        })

        setPosition(activeSectionPosition)
      }
      else {
        const defaultSectionPosition = getPosition({
          id: 'desktop_navbar_default',
          desktopPosition: { ...position }
        })
        setPosition(defaultSectionPosition)
      }
    }
    handleResize()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeElement, setPosition, listElements]);

  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {listElements.map((listItem) => <NavBarListElement id={`desktop_navbar_li_${listItem.section}`} key={uuidv4()} text={listItem.section} isActive={listItem.active} />)}
    </ul>
  );
};

export default NavBarList;
