import detectElementOverflow from "detect-element-overflow";
import { RefObject, useContext } from "react";
import { TechStackContext } from "../../techStackContext/TechStackContext";

const useDetectEnter = () => {
  const { isOverTarget, dropTarget } = useContext(TechStackContext);
  const setOverTarget = isOverTarget.setOverTarget;
  const targetContext = dropTarget;

  const detectEnter = (el: RefObject<HTMLDivElement>) => {
    const overflow = 10;
    const element = el.current!;
    const target = targetContext?.current;
    const collisions = detectElementOverflow(element, target!);
    !(collisions.overflowRight >= overflow) &&
    !(collisions.overflowLeft >= overflow) &&
    !(collisions.overflowTop >= overflow) &&
    !(collisions.overflowBottom >= overflow)
      ? setOverTarget({ boolean: true, id: element.id })
      : setOverTarget({ boolean: false, id: "" });
  };
  return { detectEnter };
};

export default useDetectEnter;
