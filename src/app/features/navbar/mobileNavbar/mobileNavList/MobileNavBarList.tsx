import React, { useContext } from "react";
import MobileListElement from "./MobileListElement";
import { NavBarContext } from "../../navBarContext/NavBarContextProvider";

const MobileUnList = () => {
  const { navBarItems, navRef, mobileNavLabelRef } = useContext(NavBarContext);
  const { active } = navBarItems;

  const ulClick = () => {
    const reference = navRef?.current;
    reference!.style.pointerEvents = "none";
    setTimeout(() => {
      reference!.style.pointerEvents = "auto";
    }, 350);
  };

  return (
    <div className="mb-10 mt-3 flex w-full flex-col pl-3">
      <hr />
      <label
        id="mobile-navbar-list"
        ref={mobileNavLabelRef}
        htmlFor="mobile-navbar-list"
        className={`w-full py-2 pl-2 text-left text-xl ${active ? "text-my-black" : "text-my-purple"}`}
      >
        Menu Items
      </label>
      <ul
        ref={navRef}
        className="w-full"
        id="mobile-navbar-list"
        onClick={() => ulClick()}
      >
        {navBarItems.listElements.map((listItem) => (
          <MobileListElement
            key={`${listItem.section}`}
            id={`mobile_navbar_li_${listItem.section}`}
            text={listItem.section}
            isActive={listItem.active}
          />
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default MobileUnList;
