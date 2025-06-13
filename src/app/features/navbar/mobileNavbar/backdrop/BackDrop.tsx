useContext
import { useContext } from 'react'
import { NavBarContext } from "./../../navBarContext/NavBarContextProvider"

const BackDrop = () => {
  const {toogleMobileNav} = useContext(NavBarContext)
  const {displayMenu, backdropRef} = toogleMobileNav

  // to remove (probably)
  return (
   <div ref={backdropRef} className={` h-screen w-screen bg-gray-200 ${displayMenu && 'backdrop-open'} fixed z-100 top-0 left-0 opacity-0`}>
    
   </div>
  )
}

export default BackDrop