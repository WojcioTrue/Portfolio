import React from 'react'
import MobileListElement from './MobileListElement'
import { v4 as uuidv4 } from 'uuid';
import { categories } from "../navItems";

const MobileUnList = () => {
  return (
    <div className='bg-red-300 h-full'>
      <label htmlFor="mobile-navbar-list">Beauty list printed in saturday</label>
      <ul id="mobile-navbar-list" >
      {categories.map((x) => <MobileListElement key={uuidv4()} text={x} image='/template_logo.svg' />)}
      </ul>
    </div>

  )
}

export default MobileUnList