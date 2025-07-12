import { useCallback, useContext } from "react";
import { NavBarContext } from "../navBarContext/NavBarContextProvider";

const useLiRef = (section: string) => {
  const { defaultLiRef, skillsLiRef, aboutLiRef, textLiRef, somethingLiRef } =
    useContext(NavBarContext);

  const getReference = useCallback(
    (arg: string) => {
      if (arg === "Skills") {
        return skillsLiRef;
      } else if (arg === "About") {
        return aboutLiRef;
      } else if (arg === "Text") {
        return textLiRef;
      } else if (arg === "Something") {
        return somethingLiRef;
      } else {
        return defaultLiRef;
      }
    },
    [aboutLiRef, defaultLiRef, skillsLiRef, somethingLiRef, textLiRef],
  );
  return getReference(section);
};

export default useLiRef;
