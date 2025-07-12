import { useContext, useEffect, useState } from "react";
import { NavBarContext } from "../navBarContext/NavBarContextProvider";
import NavBarAnimatedStyles from "./NavBarAnimatedBg.module.scss";

const AnimatedBackground = () => {
  const { navBarDesktopPosition } = useContext(NavBarContext);
  const { position } = navBarDesktopPosition;
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
    // position state works like event listener while resize
  }, [position]);

  return (
    <div className={`static left-0 h-full w-full overflow-hidden`}>
      <span
        className={`absolute h-[calc(100%_-_3px)] w-[200%] rounded-br-xl bg-white ${NavBarAnimatedStyles.right_animation} ${NavBarAnimatedStyles.top_animation_on} `}
        style={{ right: `${isDesktop ? position.right : -20}px` }}
      ></span>
      <span
        className={`absolute h-[calc(100%_-_3px)] w-[200%] bg-white md:rounded-bl-xl ${NavBarAnimatedStyles.left_animation} ${NavBarAnimatedStyles.top_animation_on} `}
        style={{ left: `${isDesktop ? position.left : -20}px` }}
      ></span>
    </div>
  );
};

export default AnimatedBackground;
