import { NavBarContext } from './NavBar'
import { useContext, useEffect, useState } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { ListElement } from './navItems';
import { list } from 'postcss';

const NavBarList = () => {
  const { navBarItems } = useContext(NavBarContext)
  const [activeElement, setActiveElement] = useState<[] | ListElement[]>([])


  useEffect(() => {
    console.log(activeElement![0])
  }, [activeElement])

  useEffect(() => {
    const updateActiveLi = () => {
      setActiveElement(navBarItems.listElements.filter(x => x.active === true))
    }
    window.addEventListener('resize', updateActiveLi)
    return () => {
      window.removeEventListener('resize', updateActiveLi)
    }
  }, [navBarItems.listElements])




  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {navBarItems.listElements.map((listItem) => <NavBarListElement id={`navbar_li_${listItem.section}`} key={uuidv4()} text={listItem.section} isActive={listItem.active} image='/template_logo.svg' />)}
    </ul>
  );
};

export default NavBarList;
