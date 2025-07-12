import React, { useEffect, useContext } from "react";
import MobileNavBarList from "./mobileNavList/MobileNavBarList";
import "./mobieNavBar.scss";
import { NavBarContext } from "../navBarContext/NavBarContextProvider";
import MobileAnimatedBg from "./animatedBg/MobileAnimatedBg";
import ToggleMenuButton from "@/app/features/navbar/ToggleMenuButton";
import { BlurPage } from "./backdrop/BackDropContext";
import { Link } from "react-scroll";
import useDisableScrollEv from "../navBarHooks/useDisableScrollEv";

const MobileNavBar = () => {
  const { toogleMobileNav, navBarItems, mobileNavBarRef } =
    useContext(NavBarContext);
  const { blurPage } = useContext(BlurPage);
  const { setIsBlur } = blurPage;
  const { displayMenu, backdropRef, setDisplayMenu } = toogleMobileNav;
  const { listElements, setActive } = navBarItems;
  const [disable, disableAfterClick] = useDisableScrollEv();

  // fix it (nie działa kliknięcie poza navbar menu)
  useEffect(() => {
    const backdropId = backdropRef?.current;

    const handleClickOutside = (event: MouseEvent) => {
      backdropId &&
        backdropId.contains(event.target as Node) &&
        (setDisplayMenu(false), setIsBlur(false));
    };

    document.body.addEventListener("click", handleClickOutside);
    // cleanup
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDisplayMenu]);

  const closeMenu = () => {
    setTimeout(() => {
      setDisplayMenu(false);
      setIsBlur(false);
    }, 300);
  };

  const resetActive = () => {
    const liElements = listElements.map((x) => ({ ...x, active: false }));
    (navBarItems.setListElements(liElements), setActive(false));
  };

  return (
    <div
      className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-hidden pl-2 ${displayMenu ? "display-on" : "display-off"}`}
    >
      <div ref={mobileNavBarRef} className="h-full overflow-y-auto">
        <div className="relative flex items-center px-3 pt-[21px]">
          <span className="absolute top-0 ml-[-21px] h-[5px] w-[calc(100%+21px)] bg-gradient-to-tr from-my-gradient1 to-my-gradient2"></span>
          <span
            onClick={() => {
              setDisplayMenu(false);
              setIsBlur(false);
            }}
            className="mobile-logo w-full flex-1"
          >
            <Link
              onClick={() => {
                closeMenu();
                disableAfterClick();
                resetActive();
              }}
              activeClass="active"
              to={"default"}
              spy={true}
              smooth={true}
              duration={200}
            >
              <h1 className={`text-3xl text-my-purple`}>Wojcio_True</h1>
            </Link>
          </span>
          <ToggleMenuButton />
        </div>
        <MobileNavBarList />
      </div>
      <MobileAnimatedBg />
    </div>
  );
};

export default MobileNavBar;
