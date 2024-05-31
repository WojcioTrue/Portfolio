import React from 'react'

type MobileNavBarListType = {
    toggleMenu: () => void
}

const MobileNavBarList = ({ toggleMenu }: MobileNavBarListType) => {


    return (
        <div className='fixed right-0 bg-yellow-100 w-full h-full max-w-sm' > <div className='mobile-logo relative bg-blue-300 w-full'>
            <h1 className='px-6 py-4'>text</h1>
            <button
                className="bg-red-500 absolute right-4 top-4 px-2"
                type="button"
                aria-controls="dropdown__navbar"
                aria-expanded="false"
                aria-label="Toggle navbar"
                onClick={() => toggleMenu()}
            >X</button>
        </div>
        </div>
    )
}

export default MobileNavBarList