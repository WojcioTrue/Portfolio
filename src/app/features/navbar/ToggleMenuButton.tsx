import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useContext } from "react";
import { BlurPage } from "./mobileNavbar/backdrop/BackDropContext";
import { NavBarContext } from "./navBarContext/NavBarContextProvider";

type ToggleMenuButtonType = {
  onlyMobile?: boolean;
};

const ToggleMenuButton = ({ onlyMobile }: ToggleMenuButtonType) => {
  const { toogleMobileNav } = useContext(NavBarContext);
  const { displayMenu, setDisplayMenu } = toogleMobileNav;
  const { blurPage } = useContext(BlurPage);
  const { setIsBlur } = blurPage;
  return (
    <motion.button
      animate={{
        rotate: displayMenu ? 90 : 0,
      }}
      transition={{
        delay: 0.2,
      }}
      className={`h-12 w-12 ${onlyMobile ? "md:hidden" : ""}flex items-center justify-center`}
      type="button"
      aria-controls="dropdown__navbar"
      aria-expanded="false"
      aria-label="Toggle navbar"
      onClick={() => {
        setDisplayMenu((prev) => !prev);
        setIsBlur((prev) => !prev);
      }}
    >
      <HiOutlineXMark size={"25px"} color="rgb(116, 31, 245)" />
    </motion.button>
  );
};

export default ToggleMenuButton;
