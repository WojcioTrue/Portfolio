import React from 'react'
import MobileListElement from './MobileListElement'
import { v4 as uuidv4 } from 'uuid';
import { categories } from "../navItems";

const MobileUnList = () => {
  return (
    <div className='h-full w-full flex flex-col'>
      <label htmlFor="mobile-navbar-list" className="w-full text-left pl-2 py-2 text-xl">Menu Items</label>
      <ul className='w-full' id="mobile-navbar-list">
        {categories.map((x) => <MobileListElement key={uuidv4()} text={x} image='/template_logo.svg' />)}
      </ul>
    </div>

  )
}

export default MobileUnList