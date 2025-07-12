import NavBarIndicatorField from "./navBarList/NavBarIndicatorField";
import { RefObject, useContext } from "react";
import { NavBarContext } from "./navBarContext/NavBarContextProvider";
import ToggleMenuButton from "@/app/features/navbar/ToggleMenuButton";
import { Link } from "react-scroll";
import useDisableScrollEv from "./navBarHooks/useDisableScrollEv";
useDisableScrollEv;

const NavBarTitle = () => {
  const { navBarDesktopPosition, navBarItems, defaultLiRef } =
    useContext(NavBarContext);
  const { position, setPosition } = navBarDesktopPosition;
  const { listElements, setActive } = navBarItems;
  const [disable, disableAfterClick] = useDisableScrollEv();
  const defaultLi = defaultLiRef as RefObject<HTMLDivElement>;

  const resetActive = () => {
    const liElements = listElements.map((x) => ({ ...x, active: false }));
    (navBarItems.setListElements(liElements), setActive(false));
  };

  return (
    <div
      // onClick={(event: React.MouseEvent) => {

      // }}
      id="desktop_navbar_default"
      ref={defaultLi}
      className="navbar__brand flex w-auto items-center justify-between pl-5 pr-3"
    >
      <Link
        className="flex cursor-pointer items-center gap-2"
        activeClass="active"
        to={"default"}
        spy={true}
        smooth={true}
        duration={200}
        onClick={() => {
          resetActive();
          disableAfterClick();
        }}
      >
        <NavBarIndicatorField text={"default"} />
        <p
          className={`my-auto inline py-3 text-2xl font-medium text-my-purple`}
        >
          Wojcio_True
        </p>
      </Link>
      <ToggleMenuButton onlyMobile={true} />
    </div>
  );
};

export default NavBarTitle;
