import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const About = () => {
    const {aboutSectionRef} = useContext(NavBarContext)
  return (
    <div
        id="About"
        ref={aboutSectionRef}
        className="relative h-full bg-yellow-green">About</div>
  )
}

export default About