import { useContext } from "react";
import { TechStackContext } from "../../techStackContext/TechStackContext";

const useDropped = () => {
  const { isTarget, isOverTarget } = useContext(TechStackContext);
  const { setInTarget } = isTarget;
  const { setOverTarget } = isOverTarget;

  const droppedInField = (id: string) => {
    setInTarget({ boolean: true, id });
    setOverTarget({ boolean: false, id: "" });
  };
  return { droppedInField };
};

export default useDropped;
