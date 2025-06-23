import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const Text = () => {
    const {textSectionRef} = useContext(NavBarContext)
  return (
    <div
        id="Text"
        ref={textSectionRef}
        className="relative h-full bg-red-600">Text</div>
  )
}

export default Text