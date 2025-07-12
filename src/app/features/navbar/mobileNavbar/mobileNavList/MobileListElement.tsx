import { NavBarContext } from "../../navBarContext/NavBarContextProvider";
import { useContext } from "react";
import { categories } from "../../navItems";
import { NavBarListElementType } from "../../navBarTypes";
import MobileIndicatorIcon from "./MobileIndicatorIcon";
import { motion } from "framer-motion";
import { BlurPage } from "../backdrop/BackDropContext";
import { Link } from "react-scroll";
import useDisableScrollEv from "../../navBarHooks/useDisableScrollEv";
import useIndicatorRef from "../../navBarHooks/useIndicatorRef";
import { horizontalMidPosition } from "../../navBarHooks/useDefaultIndicator";
import useMobileLiRef from "../mobieNavBarHooks/useMobileLiRef";

const MobileListElement = ({ text, id, isActive }: NavBarListElementType) => {
  const { blurPage } = useContext(BlurPage);
  const { navBarItems, indicatorDesktop, toogleMobileNav } =
    useContext(NavBarContext);
  const { setIndicatorPosition } = indicatorDesktop;
  const { setListElements } = navBarItems;
  const { setDisplayMenu } = toogleMobileNav;
  const { setIsBlur } = blurPage;
  const [disable, disableAfterClick] = useDisableScrollEv();
  const refObj = useIndicatorRef();
  const liRef = useMobileLiRef(text);

  const changeActiveLi = () => {
    setListElements(
      categories.map((x) =>
        x.section === text ? { ...x, active: true } : { ...x, active: false },
      ),
    );
  };

  const changeIndicator = () => {
    setIndicatorPosition(horizontalMidPosition(refObj?.current));
  };

  const closeMenu = () => {
    setTimeout(() => {
      setDisplayMenu(false);
      setIsBlur(false);
    }, 300);
  };

  return (
    <Link
      activeClass="active"
      to={text}
      spy={true}
      smooth={true}
      offset={-77}
      duration={200}
    >
      <li
        onClick={() => {
          changeActiveLi();
          changeIndicator();
          closeMenu();
          disableAfterClick();
        }}
        ref={liRef}
        id={id}
        className={`mobile-nav-bar-element flex py-2 pl-1`}
      >
        <MobileIndicatorIcon active={isActive} />
        <motion.p
          layout
          animate={{
            translateX: isActive ? "10px" : "0px",
          }}
          className={`flex items-center justify-start ${isActive ? `text-my-purple` : `text-my-black`} `}
        >
          {text}
        </motion.p>
      </li>
    </Link>
  );
};

export default MobileListElement;
