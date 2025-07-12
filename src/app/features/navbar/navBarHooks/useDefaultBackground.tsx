import { useContext, useEffect } from "react";
import { ItemPositionType } from "../navBarTypes";
import { SetStateAction, Dispatch } from "react";
import { NavBarContext } from "../navBarContext/NavBarContextProvider";
import useLiRef from "./useLiRef";

type DefaultBackGroundType = {
  activeSection: string;
  navBarDesktopPosition: ItemPositionType;
  setNavBarDesktopPosition: Dispatch<SetStateAction<ItemPositionType>>;
};

type GetInitialPositionType = {
  ref: HTMLDivElement | HTMLLIElement | undefined | null;
  desktopPosition: ItemPositionType;
};

type NewClickCenterType = {
  activeLiRef: HTMLDivElement | HTMLLIElement | undefined | null;
  navBarDesktopPosition: ItemPositionType;
  setNavBarDesktopPosition: Dispatch<SetStateAction<ItemPositionType>>;
};

export const getPosition = ({
  ref: element,
  desktopPosition,
}: GetInitialPositionType) => {
  if (element !== undefined) {
    const elementWidth = Math.round(
      Number((element as HTMLLIElement).clientWidth),
    );

    const leftValue =
      Number(
        (element as HTMLLIElement).getBoundingClientRect().left.toFixed(0),
      ) + elementWidth;

    const rightValue =
      document.body.clientWidth -
      (Number(
        (element as HTMLLIElement).getBoundingClientRect().right.toFixed(0),
      ) -
        elementWidth);

    return { ...desktopPosition, left: leftValue, right: rightValue };
  }
};

export const newClickCenter = ({
  activeLiRef,
  navBarDesktopPosition,
  setNavBarDesktopPosition,
}: NewClickCenterType) => {
  const activeSectionPosition = getPosition({
    ref: activeLiRef,
    desktopPosition: navBarDesktopPosition,
  })!;
  setNavBarDesktopPosition(activeSectionPosition);
};

const useDefaultBackground = ({
  activeSection,
  navBarDesktopPosition,
  setNavBarDesktopPosition,
}: DefaultBackGroundType) => {
  const { defaultLiRef, navBarItems } = useContext(NavBarContext);
  const activeLiRef = useLiRef(activeSection);
  const { active } = navBarItems;

  useEffect(() => {
    if (active) {
      const activeSectionPosition = getPosition({
        ref: activeLiRef?.current,
        desktopPosition: navBarDesktopPosition,
      })!;
      setNavBarDesktopPosition(activeSectionPosition);
    } else {
      const defaultSectionPosition = getPosition({
        ref: defaultLiRef?.current,
        desktopPosition: navBarDesktopPosition,
      })!;
      setNavBarDesktopPosition(defaultSectionPosition);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection, active]);
};

export default useDefaultBackground;
