import Image from "next/image";
import "./NavBar.scss";


const NavBarList = () => {
  return (
    <ul className="navbar-list w-full md:w-auto bg-slate-400 flex flex-col md:flex-row  md:items-center md:pr-2">
      <li className="px-1">
        <a className="flex items-center">
          <Image
            priority={true}
            src="/template_logo.svg"
            alt="Logo"
            width="20"
            height="20"
            className="bg-slate m-auto mr-2"
          />
          About
        </a>
      </li>
      <li className="px-1">
        <a className="flex items-center">
          <Image
            priority={true}
            src="/template_logo.svg"
            alt="Logo"
            width="20"
            height="20"
            className="bg-slate m-auto mr-2"
          />
          About
        </a>
      </li>
      <li className="px-1">
        <a className="flex items-center">
          <Image
            priority={true}
            src="/template_logo.svg"
            alt="Logo"
            width="20"
            height="20"
            className="bg-slate m-auto mr-2"
          />
          About
        </a>
      </li>
      <li className="px-1">
        <a className="flex items-center">
          <Image
            priority={true}
            src="/template_logo.svg"
            alt="Logo"
            width="20"
            height="20"
            className="bg-slate m-auto mr-2"
          />
          About
        </a>
      </li>
      
    </ul>
  );
};

export default NavBarList;
