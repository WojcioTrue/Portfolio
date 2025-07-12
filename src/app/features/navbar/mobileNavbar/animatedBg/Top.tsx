import React, { useContext, useEffect, useState } from "react";
import { NavBarContext } from "./../../navBarContext/NavBarContextProvider";
import animatedBackground from "./animatedBg.module.scss";

const Top = () => {
  const { navBarMobilePosition } = useContext(NavBarContext);
  const { position } = navBarMobilePosition;
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [navBarMobilePosition]);

  return (
    <div
      className={`relative z-[-10] h-[100%] rounded-bl-lg bg-white ${animatedBackground.bg_animation_bottom}`}
      style={{ bottom: `${height - position.top}px` }}
    ></div>
  );
};

export default Top;
