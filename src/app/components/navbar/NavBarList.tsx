import { NavBarContext } from './NavBar'
import { useContext } from 'react'
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';

const NavBarList = () => {
  const { navBarItems } = useContext(NavBarContext)
  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {navBarItems.listElements.map((listItem) => <NavBarListElement key={uuidv4()} text={listItem.section} isActive={listItem.active} image='/template_logo.svg' />)}
    </ul>
  );
};

export default NavBarList;
