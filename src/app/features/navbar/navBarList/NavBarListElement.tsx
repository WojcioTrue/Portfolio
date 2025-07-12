import { NavBarContext } from "../navBarContext/NavBarContextProvider";
import { RefObject, useContext } from "react";
import { categories } from "../navItems";
import NavBarIndicatorField from "./NavBarIndicatorField";
import { NavBarListElementType } from "../navBarTypes";
import { newClickCenter } from "../navBarHooks/useDefaultBackground";
import { Link } from "react-scroll";
import useDisableScrollEv from "../navBarHooks/useDisableScrollEv";
import { horizontalMidPosition } from "../navBarHooks/useDefaultIndicator";
import useIndicatorRef from "../navBarHooks/useIndicatorRef";
import useLiRef from "../navBarHooks/useLiRef";

const NavBarListElement = ({ id, text, isActive }: NavBarListElementType) => {
  const { navBarDesktopPosition, navBarItems, indicatorDesktop } =
    useContext(NavBarContext);
  const { position, setPosition } = navBarDesktopPosition;
  const { setIndicatorPosition } = indicatorDesktop;
  const { setListElements } = navBarItems;
  const [disable, disableAfterClick] = useDisableScrollEv();
  const liIndicatorRef = useIndicatorRef();
  const liElementRef = useLiRef(text);

  const changeIndicatorPos = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const newIndicatorPosition = horizontalMidPosition(liIndicatorRef?.current);
    setIndicatorPosition(newIndicatorPosition);
  };

  const listElementClick = (event: React.MouseEvent) => {
    event.preventDefault();
    newClickCenter({
      activeLiRef: liElementRef?.current,
      navBarDesktopPosition: position,
      setNavBarDesktopPosition: setPosition,
    });
    changeIndicatorPos(event);
    setListElements(
      categories.map((x) =>
        x.section === text ? { ...x, active: true } : { ...x, active: false },
      ),
    );
  };

  return (
    <Link to={text} spy={true} smooth={true} duration={200} offset={-77}>
      <li
        onClick={(event: React.MouseEvent) => {
          if (!disable) {
            (listElementClick(event), disableAfterClick());
          }
        }}
        id={id}
        ref={liElementRef as RefObject<HTMLLIElement>}
        className={`desktop-nav-bar-element text-md cursor-pointer px-4`}
      >
        <p
          className={`flex w-max items-center gap-2 transition-colors ${isActive ? "text-my-purple" : "text-my-black"}`}
        >
          <NavBarIndicatorField text={text} />
          {text}
        </p>
      </li>
    </Link>
  );
};

export default NavBarListElement;
