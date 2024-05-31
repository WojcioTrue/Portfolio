import React from 'react'

type MobileNavBarListType = {
    toggleMenu: () => void
}

const MobileNavBarList = ({ toggleMenu }: MobileNavBarListType) => {


    return (
        <div onClick={() => toggleMenu()}
            className='fixed right-0 bg-yellow-100 w-full h-full max-w-sm' >
            
            <div className='mobile-logo bg-blue-300 w-full p'>
                <h1 className='px-6 py-4'>text</h1>
            </div>
        </div>
    )
}

export default MobileNavBarList