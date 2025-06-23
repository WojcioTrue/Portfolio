import React, { useContext } from 'react'
import { NavBarContext } from '../navbar/navBarContext/NavBarContextProvider'

const About = () => {
    const {aboutSectionRef} = useContext(NavBarContext)
  return (
    <div
        id="About"
        ref={aboutSectionRef}
        className="relative h-full bg-white border-t-[1px] border-my-lightGray ">About</div>
  )
}

export default About