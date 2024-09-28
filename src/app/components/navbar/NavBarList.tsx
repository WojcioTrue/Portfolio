import { NavBarContext } from './NavBar'
import { useContext, useEffect, useState } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { ListElement } from './navItems';

const NavBarList = () => {
  const { navBarItems, navBarItemPosition } = useContext(NavBarContext)
  const [activeElement, setActiveElement] = useState<ListElement[]>([])
  const { position ,setPosition } = navBarItemPosition


  useEffect(() => {
    const updateActiveLi = () => {
      const activeElement = () => navBarItems.listElements.filter(x => x.active === true);
      setActiveElement(activeElement)
    }

    window.addEventListener('resize', updateActiveLi)

    return () => {
      window.removeEventListener('resize', updateActiveLi)
    }
  }, [navBarItems.listElements])

  useEffect(() => {
    function handleResize() {
      if (activeElement[0] !== undefined) {
        const activeLIElement = document.getElementById(`desktop_navbar_li_${activeElement[0].section}`)

        const elementWidth = Number((activeLIElement!.offsetWidth).toFixed(0));
        // offset left element with 'left' property
        
        const leftValue = Number(activeLIElement!.getBoundingClientRect().left.toFixed(0)) + elementWidth;
        // offset element with 'right' property
        
        const rightValue = document.body.clientWidth - Number(activeLIElement!.getBoundingClientRect().right.toFixed(0)) + elementWidth

        const newPosition = {...position, left: leftValue, right: rightValue}

        setPosition(newPosition)
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
