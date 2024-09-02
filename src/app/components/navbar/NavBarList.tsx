import { NavBarContext } from './NavBar'
import { useContext, useEffect, useState } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { ListElement } from './navItems';

const NavBarList = () => {
  const { navBarItems, navBarItemPosition } = useContext(NavBarContext)
  const [activeElement, setActiveElement] = useState<ListElement[]>([])
  const { setPosition } = navBarItemPosition


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
        const activeLIElement = document.getElementById(`navbar_li_${activeElement[0].section}`)

        const centerOfElement = Number((activeLIElement!.offsetWidth / 2).toFixed(0));
        // offset left element with 'left' property
        
        const leftValue = Number(activeLIElement!.getBoundingClientRect().left.toFixed(0)) + centerOfElement;
        // offset element with 'right' property
        
        const rightValue = document.body.clientWidth - Number(activeLIElement!.getBoundingClientRect().right.toFixed(0)) - centerOfElement

        setPosition({
          left: leftValue,
          right: rightValue,
        })
      }
    }
    handleResize()

  }, [activeElement,setPosition]);

  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {/* <h2 style={{zIndex: '100'}}>{activeElement[0] === undefined ? 'text' : activeElement[0].section}</h2> */}
      {navBarItems.listElements.map((listItem) => <NavBarListElement id={`navbar_li_${listItem.section}`} key={uuidv4()} text={listItem.section} isActive={listItem.active} image='/template_logo.svg' />)}
    </ul>
  );
};

export default NavBarList;
