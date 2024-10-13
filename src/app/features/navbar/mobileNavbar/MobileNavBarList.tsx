import React, { useContext } from 'react'
import MobileListElement from './MobileListElement'
import { v4 as uuidv4 } from 'uuid';
import { NavBarContext } from '../NavBar';

const MobileUnList = () => {
  const { navBarItems } = useContext(NavBarContext)
  return (
    <div className='h-full w-full flex flex-col'>
      <label id="mobile-navbar-list" htmlFor="mobile-navbar-list" className="w-full text-left pl-2 py-2 text-xl">Menu Items</label>
      <ul className='w-full' id="mobile-navbar-list">
        {navBarItems.listElements.map((listItem) => 
        <MobileListElement 
        key={uuidv4()} 
        id={`mobile_navbar_li_${listItem.section}`} 
        text={listItem.section} 
        isActive={listItem.active}
        image='/template_logo.svg' />)}
      </ul>
    </div>

  )
}

export default MobileUnList