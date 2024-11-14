import { NavBarContext } from './NavBar'
import { useContext, useEffect, useState } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { ListElement } from './navBarTypes';

const NavBarList = () => {
  const { navBarItems, navBarDesktopPosition } = useContext(NavBarContext)
  const [activeElement, setActiveElement] = useState<ListElement[]>([])
  const { position , setPosition } = navBarDesktopPosition


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
    const positionResize = (id : string) => {
      const activeLIElement = document.getElementById(id)!

        const elementWidth = Number((activeLIElement!.offsetWidth).toFixed(0));
        // offset left element with 'left' property
        
        const leftValue = Number(activeLIElement!.getBoundingClientRect().left.toFixed(0)) + elementWidth;
        // offset element with 'right' property
        
        const rightValue = document.body.clientWidth - Number(activeLIElement!.getBoundingClientRect().right.toFixed(0)) + elementWidth

        const newPosition = {...position, left: leftValue, right: rightValue}

        setPosition(newPosition)
    }

    function handleResize() {
      if (activeElement[0] !== undefined) {
        positionResize(`desktop_navbar_li_${activeElement[0].section}`)
      } 
      else {
        positionResize(`desktop_navbar_default`)
      }
    }
    handleResize()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeElement,setPosition]);

  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {navBarItems.listElements.map((listItem) => <NavBarListElement id={`desktop_navbar_li_${listItem.section}`} key={uuidv4()} text={listItem.section} isActive={listItem.active} image='/template_logo.svg' />)}
    </ul>
  );
};

export default NavBarList;
