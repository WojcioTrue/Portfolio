import React, { useContext } from 'react'
import MobileListElement from './MobileListElement'
import { NavBarContext } from "../../navBarContext/NavBarContextProvider"


const MobileUnList = () => {
  const { navBarItems } = useContext(NavBarContext)
  const { active } = navBarItems

  return (
    <div className='w-full flex flex-col pl-3 mt-3'>
      <hr />
      <label id="mobile-navbar-list" htmlFor="mobile-navbar-list" className={`w-full text-left pl-2 py-2 text-xl ${active ? 'text-my-black' : 'text-my-purple'}`}>Menu Items</label>
      <ul className='w-full pl-2' id="mobile-navbar-list">
        {navBarItems.listElements.map((listItem) =>
          <MobileListElement
            key={`${listItem.section}`}
            id={`mobile_navbar_li_${listItem.section}`}
            text={listItem.section}
            isActive={listItem.active}
          />)}
      </ul>
      <hr />
    </div>

  )
}

export default MobileUnList