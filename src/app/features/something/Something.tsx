import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const Something = () => {
    const {somethingSectionRef} = useContext(NavBarContext)
  return (
    <div
        id="Something"
        ref={somethingSectionRef}
        className="relative h-full bg-yellow-900">Something</div>
  )
}

export default Something