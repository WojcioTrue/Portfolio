import { useEffect, useContext, useMemo } from "react";
import { NavBarContext } from "../../navBarContext/NavBarContextProvider";
import useMobileLiRef from "./useMobileLiRef";

const useScrollBackground = () => {
  const {
    toogleMobileNav,
    navBarItems,
    navBarMobilePosition,
    mobileNavLabelRef,
    mobileNavBarRef,
  } = useContext(NavBarContext);
  const { displayMenu } = toogleMobileNav;
  const { position, setPosition } = navBarMobilePosition;
  const activeLi = useMemo(
    () => navBarItems.listElements.filter((x) => x.active === true),
    [navBarItems.listElements],
  );
  const getRef = () => (activeLi.length > 0 ? activeLi[0].section : "");
  const liRef = useMobileLiRef(getRef())!;

  useEffect(() => {
    const mobileNavBar = mobileNavBarRef?.current;
    const scrollPosition = (display: boolean) => {
      const labelElement = mobileNavLabelRef?.current!;
      if (display) {
        if (activeLi.length > 0) {
          const activeSection = liRef.current!;
          const topValue = Number(
            activeSection.getBoundingClientRect().top.toFixed(0),
          );
          const bottomValue = Number(
            activeSection.getBoundingClientRect().bottom.toFixed(0),
          );
          const newPosition = {
            ...position,
            top: topValue,
            bottom: bottomValue,
          };
          setPosition(newPosition);
        } else {
          const topValue = Number(
            labelElement.getBoundingClientRect().top.toFixed(0),
          );
          const bottomValue = Number(
            labelElement.getBoundingClientRect().bottom.toFixed(0),
          );
          const newPosition = {
            ...position,
            top: topValue,
            bottom: bottomValue,
          };
          setPosition(newPosition);
        }
      }
    };
    scrollPosition(!displayMenu);

    mobileNavBar?.addEventListener("scroll", () =>
      scrollPosition(!displayMenu),
    );

    return () => {
      mobileNavBar?.removeEventListener("scroll", () =>
        scrollPosition(!displayMenu),
      );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLi, displayMenu]);
};

export default useScrollBackground;
