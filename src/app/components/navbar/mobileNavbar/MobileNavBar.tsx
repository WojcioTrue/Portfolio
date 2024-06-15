import React from 'react'
import MobileNavBarList from './MobileNavBarList'
import './mobieNavBar.scss'

type MobileNavBarType = {
    toggleMenu: () => void,
    displayMenu: boolean
}

const MobileNavBar = ({ toggleMenu, displayMenu }: MobileNavBarType) => {

    return (
        <div className={`fixed z-20 overflow-hidden right-0 w-full h-full max-w-sm  ${displayMenu ? "display-on" : "display-off"}`}>
            <div className=' flex items-center p-3'>
                <span className='mobile-logo w-full flex-1'>
                    <h1>text</h1>
                </span>
                <button
                    className="h-8 w-8"
                    type="button"
                    aria-controls="dropdown__navbar"
                    aria-expanded="false"
                    aria-label="Toggle navbar"
                    onClick={() => toggleMenu()}
                >X</button>
            </div>
            <MobileNavBarList/>
        </div>
    )
}

export default MobileNavBar