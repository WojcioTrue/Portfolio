import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from 'uuid';
import { categories } from "./navItems";


const NavBarList = () => {
  return (
    <ul className="hidden w-auto md:flex flex-row items-center">
      {categories.map((x) => <NavBarListElement key={uuidv4()} text={x.section} image='/template_logo.svg' />)}
    </ul>
  );
};

export default NavBarList;
