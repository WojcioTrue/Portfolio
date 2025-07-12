import { NavBarContext } from "../navBarContext/NavBarContextProvider";
import { useContext, useEffect } from "react";
import NavBarListElement from "./NavBarListElement";
import { v4 as uuidv4 } from "uuid";
import { newClickCenter } from "../navBarHooks/useDefaultBackground";
import useLiRef from "../navBarHooks/useLiRef";

type NavBarListType = {
  activeLiElement: string;
};

const NavBarList = ({ activeLiElement }: NavBarListType) => {
  const { navBarItems, navBarDesktopPosition } = useContext(NavBarContext);
  const { listElements } = navBarItems;
  const { position, setPosition } = navBarDesktopPosition;
  const activeLiRef = useLiRef(activeLiElement);

  useEffect(() => {
    const updateActiveLi = () => {
      newClickCenter({
        activeLiRef: activeLiRef?.current,
        navBarDesktopPosition: position,
        setNavBarDesktopPosition: setPosition,
      });
    };

    window.addEventListener("resize", updateActiveLi);

    return () => {
      window.removeEventListener("resize", updateActiveLi);
    };
  }, [activeLiRef, position, setPosition]);

  return (
    <ul className="hidden w-auto flex-row items-center md:flex">
      {listElements.map((listItem) => (
        <NavBarListElement
          id={`desktop_navbar_li_${listItem.section}`}
          key={uuidv4()}
          text={listItem.section}
          isActive={listItem.active}
        />
      ))}
    </ul>
  );
};

export default NavBarList;
